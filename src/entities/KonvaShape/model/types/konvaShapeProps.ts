import { Shape } from "entities/Shapes";
import { ShapeDragHandlers } from "features/MobXKonvaShape";

export interface KonvaShapeProps extends ShapeDragHandlers {
  className?: string;
  shape: Shape;
}
