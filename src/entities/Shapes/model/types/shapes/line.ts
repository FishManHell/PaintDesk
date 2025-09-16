import { BaseShape } from "./base";

export interface Line extends BaseShape {
  type: "line";
  points: [number, number, number, number];
}
