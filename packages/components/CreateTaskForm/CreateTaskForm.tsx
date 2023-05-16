import React, { useCallback } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { CreateTaskFormData } from "./interfaces/CreateTaskFormData";
import styles from "./CreateTaskForm.module.css";

export interface CreateTaskFormProps {
  data: CreateTaskFormData;
  onChange: (data: CreateTaskFormData) => void;
  onSubmit: (data: CreateTaskFormData) => void;
}

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  data,
  onChange,
  onSubmit,
}) => {
  const onSubmitWrapper: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(data);
    },
    [onSubmit, data]
  );

  const onChangeTaskContent: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        onChange({
          ...data,
          content: event.target.value,
        });
      },
      [onChange, data]
    );

  return (
    <form onSubmit={onSubmitWrapper} className={styles["create-task-form"]}>
      <Input
        value={data?.content}
        type="text"
        name="task-content"
        id="task-content"
        placeholder="Descrição da task"
        onChange={onChangeTaskContent}
      />
      <Button type="submit" style={{ flex: 0 }}>
        Criar
      </Button>
    </form>
  );
};
