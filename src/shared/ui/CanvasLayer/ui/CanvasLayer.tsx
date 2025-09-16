import Konva from "konva";
import { ReactNode, useRef } from "react";
import { Layer, Stage } from "react-konva";
import { CanvasLayerMouseHandlers } from "shared/types";
import { useStore } from "app/providers/MobXProvider";
import { Reactive } from "shared/ui/Reactive";

interface CanvasLayer extends CanvasLayerMouseHandlers {
  width: number;
  height: number;
  children: ReactNode;
}

export const CanvasLayer = Reactive((props: CanvasLayer) => {
  const { width, height, onMouseMove, onMouseUp, onMouseDown, children } =
    props;
  const { zoomStore } = useStore();

  const stageRef = useRef<Konva.Stage | null>(null);

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = stageRef.current;
    if (!stage) return;
    if (e.evt.button === 1 && zoomStore._scale > 1) {
      stage?.draggable(true);
      stageRef.current?.container().style.setProperty("cursor", "grab");
    } else {
      stage?.draggable(false);
      stageRef.current?.container().style.setProperty("cursor", "default");
      onMouseDown(e);
    }
  };

  const handleMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = stageRef.current;
    stage?.draggable(false);
    onMouseUp();
    if (e.evt.button === 1 && zoomStore._scale > 1) {
      stage?.container().style.setProperty("cursor", "default");
    }
  };

  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const stage = e.target as Konva.Stage;
    zoomStore.position = { x: stage.x(), y: stage.y() };
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
    onMouseMove: onMouseMove,
    onMouseUp: handleMouseUp,
    onDragMove: handleDragMove,
  };

  return (
    <Stage {...stageProps}>
      <Layer>{children}</Layer>
    </Stage>
  );
});
