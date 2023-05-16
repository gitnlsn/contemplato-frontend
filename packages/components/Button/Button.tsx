import React from "react";
import styles from "./Button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={styles["contemplato-button"]} {...rest}>
      {children}
    </button>
  );
};
