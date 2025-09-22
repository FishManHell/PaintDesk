import { Line, Rect, Ellipse } from "react-konva";
import { KonvaShapeProps } from "../model/types/konvaShapeProps";

export const KonvaShape = (props: KonvaShapeProps) => {
  const { shape, onDragEnd, onMouseUp, onMouseDown } = props;
  const { stroke, strokeWidth, type } = shape;

  switch (type) {
    case "brush":
    case "line":
      return (
        <Line
          points={Array.from(shape.points)}
          stroke={stroke}
          strokeWidth={strokeWidth}
          lineCap="round"
          lineJoin="round"
          hitStrokeWidth={5}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onDragEnd={onDragEnd}
        />
      );
    case "rect":
      return (
        <Rect
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          stroke={stroke}
          hitStrokeWidth={5}
          strokeWidth={strokeWidth}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onDragEnd={onDragEnd}
        />
      );
    case "circle":
      return (
        <Ellipse
          x={shape.x + shape.width / 2}
          y={shape.y + shape.height / 2}
          radiusX={Math.abs(shape.width) / 2}
          radiusY={Math.abs(shape.height) / 2}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onDragEnd={onDragEnd}
        />
      );
    case "triangle":
      return (
        <Line
          points={[
            shape.x,
            shape.y + shape.height,
            shape.x + shape.width,
            shape.y + shape.height,
            shape.x + shape.width / 2,
            shape.y,
          ]}
          closed
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onDragEnd={onDragEnd}
        />
      );
    default:
      return null;
  }
};
