import { BaseShape } from "./base";

export interface Brush extends BaseShape {
  type: "brush";
  points: number[];
}
