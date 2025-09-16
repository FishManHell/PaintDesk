export interface Position {
  x: number;
  y: number;
}

export interface ControlSize {
  width: number;
  height: number;
  origHeight: number;
  origWidth: number;
}

export interface ZoomSchema {
  _scale: number;
  _position: Position;
  _controlSize: ControlSize;
}
