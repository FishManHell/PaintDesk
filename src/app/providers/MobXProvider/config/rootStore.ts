import { StateSchema } from "./stateSchema";
import { SelectToolStore } from "entities/Tool";
import { DrawingStore } from "entities/Shapes";
import { zoomStore, ZoomStore } from "entities/Zoom";
import { strokeStore, StrokeStore } from "entities/Stroke";

export class RootStore implements StateSchema {
  selectTool: SelectToolStore;
  drawingStore: DrawingStore;
  zoomStore: ZoomStore;
  strokeStore: StrokeStore;

  // init
  constructor() {
    this.selectTool = new SelectToolStore();
    this.zoomStore = zoomStore;
    this.strokeStore = strokeStore;

    this.drawingStore = new DrawingStore(this.selectTool, this.strokeStore);
  }
}
