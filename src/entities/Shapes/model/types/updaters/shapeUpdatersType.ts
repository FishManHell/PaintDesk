import { ShapeMap } from "../shape";

export type ShapeUpdaterType = {
  [K in keyof ShapeMap]: (shape: ShapeMap[K], x: number, y: number) => void;
};
