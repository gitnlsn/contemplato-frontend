import React from "react";
import styles from "./LoadingIcon.module.css";

interface LoadingIconProps {
  size: number;
}

export const LoadingDualRing: React.FC<LoadingIconProps> = ({ size }) => {
  return (
    <div
      className={styles["lds-ring"]}
      style={{
        width: size,
        height: size,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
