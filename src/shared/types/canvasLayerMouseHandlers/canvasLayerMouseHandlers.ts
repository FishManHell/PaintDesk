import Konva from "konva";

export interface CanvasLayerMouseHandlers {
  onMouseDown: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onMouseMove: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onMouseUp: () => void;
}
