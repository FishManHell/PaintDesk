import { BaseShape } from "./base";

export interface Triangle extends BaseShape {
  type: "triangle";
  x: number;
  y: number;
  radius: number;
}
