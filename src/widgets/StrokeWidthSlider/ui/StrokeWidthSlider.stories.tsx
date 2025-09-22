import type { Meta, StoryObj } from "@storybook/react";
import { StrokeWidthSlider } from "./StrokeWidthSlider";

const meta = {
  title: "widgets/StrokeWidthSlider",
  component: StrokeWidthSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof StrokeWidthSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const DefaultValue: Story = {
  args: {
    defaultValue: 20,
  },
};

export const MinMax: Story = {
  args: {
    min: 10,
    max: 15,
  },
};

export const Tooltip: Story = {
  args: {
    tooltip: {
      formatter: (v) => `${v}px`,
    },
  },
};
