import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import Brush from "shared/assets/icons/brush.svg";

const meta = {
  title: "shared/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    Svg: Brush,
    width: 50,
    height: 50,
  },
};
