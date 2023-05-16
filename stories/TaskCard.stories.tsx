import type { Meta, StoryObj } from "@storybook/react";

import { TaskCard } from "../packages/components/TaskCard/TaskCard";
import closeButtonImage from "../public/close.svg";

const meta: Meta<typeof TaskCard> = {
  title: "TaskCard",
  component: TaskCard,
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Primary: Story = {
  args: {
    task: {
      id: "1",
      userId: "12",
      content: "task content",
    },
    onClickDelete: () => alert("clicked remove task"),
    closeButtonUrl: closeButtonImage,
  },
};
