import { makeAutoObservable } from "mobx";

export class StrokeStore {
  _color: string = "#000000";
  _width: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  set width(value: number) {
    this._width = value;
  }

  get width(): number {
    return this._width;
  }

  set color(value: string) {
    this._color = value;
  }

  get color(): string {
    return this._color;
  }
}

export const strokeStore = new StrokeStore();
