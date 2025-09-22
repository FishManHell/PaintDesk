import Konva from "konva";
import { dragStore } from "entities/Drag";

export interface ShapeDragHandlers {
  onMouseDown: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onMouseUp: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onDragEnd: (e: Konva.KonvaEventObject<DragEvent>) => void;
}

export const useShapeDragHandlers = (): ShapeDragHandlers => {
  const onMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (e.evt.button === 0 && dragStore._isDragging) {
      e.target.draggable(true);
      e.target.startDrag();
    }
  };

  const onMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (e.evt.button === 0 && dragStore._isDragging) {
      e.target.draggable(false);
    }
  };

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    if (e.evt.button === 0 && dragStore._isDragging) {
      console.log("New position:", e.target.x(), e.target.y());
      e.target.draggable(false);
    }
  };

  return { onMouseDown, onMouseUp, onDragEnd };
};
