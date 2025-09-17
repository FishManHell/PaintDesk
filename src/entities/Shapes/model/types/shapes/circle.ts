import { BaseShape, BoundingBox } from "./base";

export interface Circle extends BaseShape, BoundingBox {
  type: "circle";
}
