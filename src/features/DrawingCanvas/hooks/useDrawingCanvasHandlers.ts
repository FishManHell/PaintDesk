import { useStore } from "app/providers/MobXProvider";
import { useThrottleCallback } from "shared/lib/hooks";
import Konva from "konva";
import { useCallback } from "react";
import { CanvasLayerHandlers } from "shared/types";
import { zoomStore } from "entities/Zoom";

export const useDrawingCanvasHandlers = (): CanvasLayerHandlers => {
  const { drawingStore } = useStore();

  const throttledUpdateLastShape = useThrottleCallback(
    (point: { x: number; y: number }) => drawingStore.update(point),
    16, // ~60fps
  );

  const getNormalizedPointer = (stage: Konva.Stage) => {
    const pointer = stage.getPointerPosition();
    if (!pointer) return null;

    const scale = zoomStore.finalScale;
    return {
      x: (pointer.x - zoomStore._position.x) / scale,
      y: (pointer.y - zoomStore._position.y) / scale,
    };
  };

  const onMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const stage = e.target.getStage();
      if (!stage) return;

      const point = getNormalizedPointer(stage);
      if (!point) return;

      drawingStore.save();

      drawingStore.onDrawingToggle(true);
      drawingStore.add(point);
    },
    [getNormalizedPointer, drawingStore],
  );

  const onMouseMove = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const stage = e.target.getStage();
      if (!stage) return;

      const point = getNormalizedPointer(stage);
      if (!point) return;

      throttledUpdateLastShape(point);
    },
    [getNormalizedPointer, throttledUpdateLastShape],
  );

  const onMouseUp = useCallback(
    () => drawingStore.onDrawingToggle(false),
    [drawingStore],
  );

  const onWheelZoom = (
    event: Konva.KonvaEventObject<WheelEvent>,
    direction: number,
  ) => {
    const stage = event.target.getStage();
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    zoomStore.setZoom(pointer, direction);
  };

  const throttledDragMove = useThrottleCallback(
    (e: Konva.KonvaEventObject<DragEvent>) => {
      const stage = e.target;
      zoomStore.position = { x: stage.x(), y: stage.y() };
    },
    32, // 30fps
  );

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onWheelZoom,
    throttledDragMove,
  };
};
