import React, { useCallback, useRef } from "react";
import { LoginFormData } from "./interfaces/LoginFormData";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./LoginForm.module.css";

export interface LoginFormProps {
  data: LoginFormData;
  onChange: (data: LoginFormData) => void;
  onSubmit: (data: LoginFormData) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  data,
  onChange,
  onSubmit,
}) => {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const onSubmitWrapper: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(data);
    },
    [data, onSubmit]
  );

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        onChange({
          ...data,
          username: event.target.value,
        });
      },
      [data, onChange]
    );

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        onChange({
          ...data,
          password: event.target.value,
        });
      },
      [data, onChange]
    );

  return (
    <form
      onSubmit={onSubmitWrapper}
      className={styles["contemplato-login-form"]}
    >
      <Input
        value={data?.username}
        ref={usernameInput}
        type="text"
        name="username"
        id="username"
        placeholder="username"
        onChange={onChangeUsername}
        required
      />
      <Input
        value={data?.password}
        ref={passwordInput}
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={onChangePassword}
        required
        minLength={8}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
