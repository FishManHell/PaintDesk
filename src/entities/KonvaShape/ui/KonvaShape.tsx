import { Circle, Line, Rect, RegularPolygon } from "react-konva";
import { Reactive } from "shared/ui/Reactive";
import { KonvaShapeProps } from "../model/types/konvaShapeProps";

export const KonvaShape = Reactive(({ shape }: KonvaShapeProps) => {
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
          strokeWidth={strokeWidth}
        />
      );
    case "circle":
      return (
        <Circle
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    case "triangle":
      return (
        <RegularPolygon
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          sides={3}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    default:
      return null;
  }
});
