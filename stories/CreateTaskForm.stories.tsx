import type { Meta, StoryObj } from "@storybook/react";

import { CreateTaskForm } from "../packages/components/CreateTaskForm/CreateTaskForm";

const meta: Meta<typeof CreateTaskForm> = {
  title: "CreateTaskForm",
  component: CreateTaskForm,
};

export default meta;
type Story = StoryObj<typeof CreateTaskForm>;

export const Primary: Story = {
  args: {},
};
