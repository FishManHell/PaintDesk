import { SelectToolSchema } from "entities/Tool";
import { DrawingShapeSchema } from "entities/Shapes";
import { ZoomSchema } from "entities/Zoom";
import { StrokeSchema } from "entities/Stroke";
import { DragSchema } from "entities/Drag";

export interface StateSchema {
  selectTool: SelectToolSchema;
  drawingStore: DrawingShapeSchema;
  zoomStore: ZoomSchema;
  strokeStore: StrokeSchema;
  dragStore: DragSchema;
}
