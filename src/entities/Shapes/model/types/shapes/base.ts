import { ToolType } from "entities/Tool";

export interface BaseShape {
  id: string;
  type: ToolType;
  stroke: string;
  strokeWidth: number;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}
