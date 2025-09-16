import { BaseShape } from "./base";

export interface Rect extends BaseShape {
  type: "rect";
  x: number;
  y: number;
  width: number;
  height: number;
}
