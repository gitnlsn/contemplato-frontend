import type { Meta, StoryObj } from "@storybook/react";

import { LoadingBar } from "../packages/components/LoadingBar/LoadingBar";

const meta: Meta<typeof LoadingBar> = {
  title: "LoadingBar",
  component: LoadingBar,
};

export default meta;
type Story = StoryObj<typeof LoadingBar>;

export const Primary: Story = {
  args: {},
};
