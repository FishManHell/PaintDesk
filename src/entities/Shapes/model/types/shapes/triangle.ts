import { BaseShape, BoundingBox } from "./base";

export interface Triangle extends BaseShape, BoundingBox {
  type: "triangle";
}
