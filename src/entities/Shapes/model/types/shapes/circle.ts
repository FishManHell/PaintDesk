import { BaseShape } from "./base";

export interface Circle extends BaseShape {
  type: "circle";
  x: number;
  y: number;
  radius: number;
}
