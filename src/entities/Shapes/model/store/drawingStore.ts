import { Shape } from "../types/shape";
import { makeAutoObservable } from "mobx";
import { SelectToolStore } from "entities/Tool";
import { factory } from "../helpers/factory";
import { updateShape } from "../helpers/updaters";
import { StrokeStore } from "entities/Stroke";

interface ShapePoints {
  x: number;
  y: number;
}

export class DrawingStore {
  shapes: Shape[] = [];
  isDrawing: boolean = false;
  toolStore: SelectToolStore;
  strokeStore: StrokeStore;

  private history: Shape[][] = [];
  private future: Shape[][] = [];

  constructor(toolStore: SelectToolStore, colorStore: StrokeStore) {
    makeAutoObservable(this);
    this.toolStore = toolStore;
    this.strokeStore = colorStore;
  }

  private cloneShapes(): Shape[] {
    return JSON.parse(JSON.stringify(this.shapes));
  }

  onDrawingToggle(isDrawing: boolean) {
    this.isDrawing = isDrawing;
  }

  save() {
    this.history.push(this.cloneShapes());
    this.future = [];
  }

  add({ x, y }: ShapePoints) {
    if (!this.toolStore || !this.toolStore.tool) return;
    this.isDrawing = true;

    const creator = factory[this.toolStore.tool];
    this.shapes.push(creator(x, y));
  }

  update({ x, y }: ShapePoints) {
    if (!this.isDrawing || this.shapes.length === 0) return;
    const last = this.shapes[this.shapes.length - 1];
    updateShape(last, last.type, x, y);
  }

  undo() {
    if (!this.history.length) return;
    this.future.push(this.cloneShapes());
    this.shapes = this.history.pop()!;
  }

  redo() {
    if (!this.future.length) return;
    this.history.push(this.cloneShapes());
    this.shapes = this.future.pop()!;
  }

  reset(): void {
    this.shapes = [];
    this.history = [];
    this.future = [];
  }
}
