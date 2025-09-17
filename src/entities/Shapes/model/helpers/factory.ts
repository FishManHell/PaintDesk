import { ShapeFactoryType } from "../types/factories/shapeFactoryType";
import { strokeStore } from "entities/Stroke";
import { v4 as uuidv4 } from "uuid";

export const factory: ShapeFactoryType = {
  brush: (x, y) => {
    return {
      id: uuidv4(),
      type: "brush",
      points: [x, y],
      stroke: strokeStore._color,
      strokeWidth: strokeStore._width,
    };
  },
  line: (x, y) => {
    return {
      id: uuidv4(),
      type: "line",
      points: [x, y, x, y] as [number, number, number, number],
      stroke: strokeStore._color,
      strokeWidth: strokeStore._width,
    };
  },
  rect: (x, y) => {
    return {
      id: uuidv4(),
      type: "rect",
      x,
      y,
      width: 0,
      height: 0,
      stroke: strokeStore._color,
      strokeWidth: strokeStore._width,
    };
  },
  circle: (x, y) => {
    return {
      id: uuidv4(),
      type: "circle",
      x,
      y,
      width: 0,
      height: 0,
      stroke: strokeStore._color,
      strokeWidth: strokeStore._width,
    };
  },
  triangle: (x, y) => {
    return {
      id: uuidv4(),
      type: "triangle",
      x,
      y,
      width: 0,
      height: 0,
      stroke: strokeStore._color,
      strokeWidth: strokeStore._width,
    };
  },
};
