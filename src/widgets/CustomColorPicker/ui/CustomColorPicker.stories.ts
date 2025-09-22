import type { Meta, StoryObj } from "@storybook/react";
import { CustomColorPicker } from "./CustomColorPicker";

const meta = {
  title: "widgets/CustomColorPicker",
  component: CustomColorPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof CustomColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
