import { useCallback, useState } from "react";
import { LoginFormData } from "../components/LoginForm/interfaces/LoginFormData";
import { LoginFormProps } from "../components/LoginForm/LoginForm";

export const useLoginForm = () => {
  const [data, setData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const onChange: LoginFormProps["onChange"] = useCallback(
    (data) => {
      setData(data);
    },
    [setData]
  );

  return {
    data,
    onChange,
  };
};
