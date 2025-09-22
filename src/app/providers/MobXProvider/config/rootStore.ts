import { SelectToolStore } from "entities/Tool";
import { DrawingStore } from "entities/Shapes";
import { zoomStore, ZoomStore } from "entities/Zoom";
import { strokeStore, StrokeStore } from "entities/Stroke";
import { DragStore, dragStore } from "entities/Drag";

export class RootStore {
  selectTool: SelectToolStore;
  drawingStore: DrawingStore;
  zoomStore: ZoomStore;
  strokeStore: StrokeStore;
  dragStore: DragStore;

  // init
  constructor(config?: Partial<RootStore>) {
    // this.selectTool = new SelectToolStore();
    // this.zoomStore = zoomStore;
    // this.strokeStore = strokeStore;
    // this.dragStore = dragStore;
    //
    // this.drawingStore = new DrawingStore(this.selectTool, this.strokeStore);

    this.selectTool = config?.selectTool ?? new SelectToolStore();
    this.zoomStore = config?.zoomStore ?? zoomStore;
    this.strokeStore = config?.strokeStore ?? strokeStore;
    this.dragStore = config?.dragStore ?? dragStore;

    this.drawingStore =
      config?.drawingStore ??
      new DrawingStore(this.selectTool, this.strokeStore);
  }
}

// seems that I don't need MobX decorator, and maybe this solution will be change too, need to test more
