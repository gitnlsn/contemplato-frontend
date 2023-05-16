import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "../packages/components/LoginForm/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};
