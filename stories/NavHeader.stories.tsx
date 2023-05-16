import type { Meta, StoryObj } from "@storybook/react";

import { NavHeader } from "../packages/components/NavHeader/NavHeader";

const meta: Meta<typeof NavHeader> = {
  title: "NavHeader",
  component: NavHeader,
};

export default meta;
type Story = StoryObj<typeof NavHeader>;

export const Primary: Story = {
  args: {
    navItems: [
      {
        id: "1",
        label: "tasks",
        link: "",
      },
      {
        id: "1",
        label: "movies",
        link: "",
      },
    ],
  },
};
