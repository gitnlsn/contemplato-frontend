import React from "react";
import styles from "./Input.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} className={styles["contemplato-input"]} />;
};
