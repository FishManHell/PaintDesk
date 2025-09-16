import { makeAutoObservable } from "mobx";
import { Position, ControlSize } from "../types/zoomSchema";

export class ZoomStore {
  _scale: number = 1;
  _position: Position = { x: 0, y: 0 };
  _controlSize: ControlSize = {
    width: 0,
    height: 0,
    origWidth: 0,
    origHeight: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  centerView(newScale: number = this._scale) {
    const center = this.getVisibleCenter();
    const { origHeight, origWidth } = this._controlSize;
    this.position = {
      x: center.x - (origWidth / 2) * newScale,
      y: center.y - (origHeight / 2) * newScale,
    };
    this._scale = newScale;
  }

  zoomIn(pointer?: Position) {
    this.setZoom(pointer ?? this.getVisibleCenter(), 1.2);
  }

  zoomOut() {
    if (this._scale > 1) {
      const newScale = this._scale / 1.2;
      this.centerView(newScale);
    }
  }

  set stageSize(sizes: ControlSize) {
    this._controlSize = sizes;
  }

  set position(_position: Position) {
    this._position = _position;
  }

  get resizeScale() {
    if (this._controlSize.origWidth === 0 || this._controlSize.origHeight === 0)
      return 1;

    const { width, height, origWidth, origHeight } = this._controlSize;

    const scaleX = width / origWidth;
    const scaleY = height / origHeight;
    return Math.min(scaleX, scaleY);
  }

  get finalScale() {
    return this._scale * this.resizeScale;
  }

  private getVisibleCenter(): Position {
    return {
      x: this._controlSize.width / 2,
      y: this._controlSize.height / 2,
    };
  }

  private setZoom(center: Position, scaleBy: number) {
    const oldScale = this._scale;
    const newScale = oldScale * scaleBy;

    const mousePointTo = {
      x: (center.x - this._position.x) / oldScale,
      y: (center.y - this._position.y) / oldScale,
    };

    this._scale = newScale;

    this._position = {
      x: center.x - mousePointTo.x * newScale,
      y: center.y - mousePointTo.y * newScale,
    };
  }

  reset() {
    this._scale = 1;
    this._position = { x: 0, y: 0 };
  }
}

export const zoomStore = new ZoomStore();
