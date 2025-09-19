import { makeAutoObservable } from "mobx";

export class DragStore {
  _isDragging: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  enable() {
    this._isDragging = true;
  }

  disable() {
    this._isDragging = false;
  }

  toggle() {
    this._isDragging = !this._isDragging;
  }

  get isDragging() {
    return this._isDragging;
  }
}

export const dragStore = new DragStore();
