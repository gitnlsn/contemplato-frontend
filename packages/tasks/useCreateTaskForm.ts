import { useCallback, useState } from "react";
import { CreateTaskFormData } from "../components/CreateTaskForm/interfaces/CreateTaskFormData";
import { CreateTaskFormProps } from "../components/CreateTaskForm/CreateTaskForm";

export const useCreateTaskForm = () => {
  const [data, setData] = useState<CreateTaskFormData>({
    content: "",
  });

  const onChange: CreateTaskFormProps["onChange"] = useCallback(
    (data) => {
      setData(data);
    },
    [setData]
  );

  const clear = useCallback(() => {
    setData({ content: "" });
  }, [setData]);

  return {
    data,
    onChange,
    clear,
  };
};
