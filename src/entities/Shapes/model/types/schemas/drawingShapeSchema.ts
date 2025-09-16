import { Shape } from "../shape";

export interface DrawingShapeSchema {
  shapes: Shape[];
  isDrawing: boolean;
}
