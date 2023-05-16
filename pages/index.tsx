import React, { useCallback, useContext } from "react";
import { redirect } from "next/navigation";
import { LoginForm } from "@/packages/components/LoginForm/LoginForm";
import { LoginContext } from "@/packages/login/LoginContext";
import { useLoginForm } from "@/packages/login/useLoginForm";
import { LoginFormData } from "@/packages/components/LoginForm/interfaces/LoginFormData";

import styles from "./index.module.css";

const Home: React.FC = () => {
  const { login } = useContext(LoginContext);

  const { data, onChange } = useLoginForm();

  const onSubmit = useCallback(
    (data: LoginFormData) => {
      login(data)
        .then(() => window.location.replace("/tasks"))
        .catch(() => alert("Usuário ou senha incorretas."));
    },
    [login]
  );

  return (
    <section className={styles["main-section"]}>
      <LoginForm data={data} onChange={onChange} onSubmit={onSubmit} />
    </section>
  );
};

export default Home;
