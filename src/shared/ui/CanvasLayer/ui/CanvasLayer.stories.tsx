import type { Meta, StoryObj } from "@storybook/react";
import { CanvasLayer } from "./CanvasLayer";
import { action } from "@storybook/addon-actions";
import { KonvaShape } from "entities/KonvaShape";
import { Shape } from "entities/Shapes";

const shapes: Shape[] = [
  {
    id: "circle-1",
    type: "circle",
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    stroke: "#000",
    strokeWidth: 3,
  },
  {
    id: "triangle-1",
    type: "triangle",
    x: 200,
    y: 50,
    width: 120,
    height: 80,
    stroke: "#000",
    strokeWidth: 3,
  },
  {
    id: "rect-1",
    type: "rect",
    x: 150,
    y: 200,
    width: 100,
    height: 100,
    stroke: "#000",
    strokeWidth: 3,
  },
];

const meta = {
  title: "shared/CanvasLayer",
  component: CanvasLayer,
  tags: ["autodocs"],
  args: {
    width: 500,
    height: 300,
    onMouseMove: action("onMouseMove"),
    onMouseUp: action("onMouseUp"),
    onMouseDown: action("onMouseDown"),
    onWheelZoom: action("onWheelZoom"),
    throttledDragMove: action("throttledDragMove"),
    children: shapes.map((shape) => (
      <KonvaShape shape={shape} key={shape.id} />
    )),
  },
} satisfies Meta<typeof CanvasLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shapes: Story = {};
