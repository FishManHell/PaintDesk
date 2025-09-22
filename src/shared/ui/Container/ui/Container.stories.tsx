import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "shared/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    children: <div>HELLO</div>,
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
