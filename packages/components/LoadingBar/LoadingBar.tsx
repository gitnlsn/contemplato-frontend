import React from "react";
import styles from "./LoadingBar.module.css";

interface LoadingBarProps {
  height?: number;
  active?: boolean;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({
  active = true,
  height = 5,
}) => {
  return (
    <div
      className={styles["Loading-progress"]}
      style={{ height, opacity: active ? 1 : 0 }}
    />
  );
};
