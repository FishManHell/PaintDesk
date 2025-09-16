import { SelectToolSchema } from "entities/Tool";
import { DrawingShapeSchema } from "entities/Shapes";
import { ZoomSchema } from "entities/Zoom";
import { StrokeSchema } from "entities/Stroke";

export interface StateSchema {
  selectTool: SelectToolSchema;
  drawingStore: DrawingShapeSchema;
  zoomStore: ZoomSchema;
  strokeStore: StrokeSchema;
}
