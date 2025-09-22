import { Shape } from "entities/Shapes";
import { ShapeDragHandlers } from "entities/KonvaShape";

export interface KonvaShapeProps extends Partial<ShapeDragHandlers> {
  className?: string;
  shape: Shape;
}
