import { StateSchema } from "./stateSchema";
import { SelectToolStore } from "entities/Tool";
import { DrawingStore } from "entities/Shapes";
import { zoomStore, ZoomStore } from "entities/Zoom";
import { strokeStore, StrokeStore } from "entities/Stroke";
import { DragStore, dragStore } from "entities/Drag";

export class RootStore implements StateSchema {
  selectTool: SelectToolStore;
  drawingStore: DrawingStore;
  zoomStore: ZoomStore;
  strokeStore: StrokeStore;
  dragStore: DragStore;

  // init
  constructor() {
    this.selectTool = new SelectToolStore();
    this.zoomStore = zoomStore;
    this.strokeStore = strokeStore;
    this.dragStore = dragStore;

    this.drawingStore = new DrawingStore(this.selectTool, this.strokeStore);
  }
}
