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
  _isZoomMode: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isZoomMode() {
    return this._isZoomMode;
  }
  toggle() {
    this._isZoomMode = !this._isZoomMode;
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

  public setZoom(pointer: Position, scaleBy: number) {
    const oldScale = this._scale;
    const newScale = oldScale * scaleBy;

    const mousePointTo = {
      x: (pointer.x - this._position.x) / oldScale,
      y: (pointer.y - this._position.y) / oldScale,
    };

    this._scale = newScale;

    this._position = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
  }

  reset() {
    this._scale = 1;
    this._position = { x: 0, y: 0 };
  }
}

export const zoomStore = new ZoomStore();
