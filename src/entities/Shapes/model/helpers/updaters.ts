import { ShapeUpdaterType } from "../types/updaters/shapeUpdatersType";
import { ShapeMap } from "../types/shape";

export const updaters: ShapeUpdaterType = {
  brush: (shape, x, y) => {
    shape.points.push(x, y);
  },
  line: (shape, x, y) => {
    shape.points = [shape.points[0], shape.points[1], x, y];
  },
  rect: (shape, x, y) => {
    shape.width = x - shape.x;
    shape.height = y - shape.y;
  },
  circle: (shape, x, y) => {
    shape.width = x - shape.x;
    shape.height = y - shape.y;
  },
  triangle: (shape, x, y) => {
    shape.width = x - shape.x;
    shape.height = y - shape.y;
  },
};

export function updateShape<T extends keyof ShapeMap>(
  shape: ShapeMap[T],
  type: T,
  x: number,
  y: number,
) {
  updaters[type](shape, x, y);
}
