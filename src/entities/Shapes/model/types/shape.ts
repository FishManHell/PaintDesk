import { Brush } from "entities/Shapes/model/types/shapes/brush";
import { Line } from "entities/Shapes/model/types/shapes/line";
import { Rect } from "entities/Shapes/model/types/shapes/rect";
import { Circle } from "entities/Shapes/model/types/shapes/circle";
import { Triangle } from "entities/Shapes/model/types/shapes/triangle";

export type Shape = Brush | Line | Rect | Circle | Triangle;

export interface ShapeMap {
  brush: Brush;
  line: Line;
  rect: Rect;
  circle: Circle;
  triangle: Triangle;
}
