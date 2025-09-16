import { ToolType } from "entities/Tool";

export interface BaseShape {
  id: string;
  type: ToolType;
  stroke: string;
  strokeWidth: number;
}
