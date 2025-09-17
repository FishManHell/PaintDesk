import { BaseShape, BoundingBox } from "./base";

export interface Rect extends BaseShape, BoundingBox {
  type: "rect";
}
