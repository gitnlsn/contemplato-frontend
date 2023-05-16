import React from "react";
import { Task } from "@/packages/tasks/interfaces/Task";
import Image from "next/image";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: Task;
  onClickDelete: () => void;
  closeButtonUrl?: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onClickDelete,
  closeButtonUrl,
}) => {
  return (
    <article className={styles["task-card"]}>
      <p className={styles["task-card-text-content"]}>{task.content}</p>
      <Image
        src={closeButtonUrl ?? "/close.svg"}
        alt="Close button"
        height={16}
        width={16}
        onClick={onClickDelete}
      />
    </article>
  );
};
