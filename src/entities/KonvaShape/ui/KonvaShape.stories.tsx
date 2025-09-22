import type { Meta, StoryObj } from "@storybook/react";
import { KonvaShape } from "./KonvaShape";
import { Layer, Stage } from "react-konva";

const meta = {
  title: "entities/KonvaShape",
  component: KonvaShape,
  tags: ["autodocs"],
  args: {
    shape: {
      id: "circle-1",
      type: "circle",
      x: 50,
      y: 50,
      width: 200,
      height: 200,
      stroke: "#000",
      strokeWidth: 3,
    },
  },
} satisfies Meta<typeof KonvaShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Stage width={400} height={400}>
      <Layer>
        <KonvaShape {...args} />
      </Layer>
    </Stage>
  ),
};
