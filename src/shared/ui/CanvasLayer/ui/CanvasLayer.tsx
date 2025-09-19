import Konva from "konva";
import { ReactNode, useRef } from "react";
import { Layer, Stage } from "react-konva";
import { CanvasLayerHandlers } from "shared/types";
import { useStore } from "app/providers/MobXProvider";
import { Reactive } from "shared/ui/Reactive";

const MIN_SCALE = 1;

interface CanvasLayer extends CanvasLayerHandlers {
  width: number;
  height: number;
  children: ReactNode;
}

export const CanvasLayer = Reactive((props: CanvasLayer) => {
  const {
    width,
    height,
    onMouseMove,
    onMouseUp,
    onMouseDown,
    onWheelZoom,
    throttledDragMove,
    children,
  } = props;
  const { zoomStore, dragStore } = useStore();

  const stageRef = useRef<Konva.Stage | null>(null);
  const isMiddleButtonDrag = useRef<boolean | null>(null);

  const setCursor = (cursor: string) => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.container().style.setProperty("cursor", cursor);
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = stageRef.current;
    const isZoomDrag = e.evt.button === 1 && zoomStore._scale > 1;

    if (isZoomDrag) {
      stage?.draggable(true);
      setCursor("grab");
      isMiddleButtonDrag.current = true;
    } else {
      stage?.draggable(false);
      setCursor("default");
      isMiddleButtonDrag.current = false;
      if (!dragStore._isDragging && e.evt.button === 0) onMouseDown(e);
    }
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = stageRef.current;
    isMiddleButtonDrag.current = false;
    stage?.draggable(false);
    if (!dragStore._isDragging) onMouseUp();
    if (e.evt.button === 1 && zoomStore._scale > 1) {
      setCursor("default");
    }
  };

  const handleOnMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (dragStore._isDragging) return;
    onMouseMove(e);
  };

  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    if (!isMiddleButtonDrag.current) return;
    throttledDragMove(e);
  };

  const onWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    if (!zoomStore.isZoomMode) return;

    const scaleBy = 1.05;
    const direction = e.evt.deltaY > 0 ? 1 / scaleBy : scaleBy;

    if (zoomStore._scale <= MIN_SCALE && direction < 1) {
      setCursor("default");
      return;
    }
    setCursor(direction > 1 ? "zoom-in" : "zoom-out");
    onWheelZoom(e, direction);
  };

  const stageProps = {
    width,
    height,
    ref: stageRef,
    scaleX: zoomStore.finalScale,
    scaleY: zoomStore.finalScale,
    x: zoomStore._position.x,
    y: zoomStore._position.y,
    onMouseDown: handleMouseDown,
    onMouseMove: handleOnMouseMove,
    onMouseUp: handleMouseUp,
    onDragMove: handleDragMove,
    onWheel,
  };

  return (
    <Stage {...stageProps}>
      <Layer>{children}</Layer>
    </Stage>
  );
});
