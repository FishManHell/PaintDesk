import Konva from "konva";

export interface CanvasLayerHandlers {
  onMouseDown: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onMouseMove: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onMouseUp: () => void;
  onWheelZoom: (
    e: Konva.KonvaEventObject<WheelEvent>,
    direction: number,
  ) => void;
  throttledDragMove: (e: Konva.KonvaEventObject<DragEvent>) => void;
}
