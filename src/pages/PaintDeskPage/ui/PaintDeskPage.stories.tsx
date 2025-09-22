import type { Meta, StoryObj } from "@storybook/react";
import { PaintDeskPage } from "./PaintDeskPage";

const meta = {
  title: "pages/PaintDeskPage",
  component: PaintDeskPage,
  tags: ["autodocs"],
} satisfies Meta<typeof PaintDeskPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
