import { ToolType } from "entities/Tool";
import { Shape } from "entities/Shapes";

type ShapeInitializer = (x: number, y: number) => Shape;

export type ShapeFactoryType = Record<ToolType, ShapeInitializer>;
