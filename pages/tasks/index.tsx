import React, { useCallback, useContext, useMemo } from "react";
import { NavHeader } from "@/packages/components/NavHeader/NavHeader";
import { NavPages } from "@/packages/config/NavPages";
import { useRedirectOnSessionExpired } from "@/packages/login/useRedirectOnSessionExpired";
import { LoginContext } from "@/packages/login/LoginContext";
import { useTasksLoader } from "@/packages/tasks/useTasksLoader";
import { useTaskCreator } from "@/packages/tasks/useTaskCreator";
import { CreateTaskForm } from "@/packages/components/CreateTaskForm/CreateTaskForm";
import { useCreateTaskForm } from "@/packages/tasks/useCreateTaskForm";
import { CreateTaskFormData } from "@/packages/components/CreateTaskForm/interfaces/CreateTaskFormData";
import { TaskCard } from "@/packages/components/TaskCard/TaskCard";
import { useTaskDeleter } from "@/packages/tasks/useTaskDeleter";
import { Task } from "@/packages/tasks/interfaces/Task";
import styles from "./index.module.css";
import { LoadingBar } from "@/packages/components/LoadingBar/LoadingBar";
import { LoadingState } from "@/packages/utils/LoadingState";

const Tasks: React.FC = () => {
  const { token } = useContext(LoginContext);

  const {
    tasks,
    forceLoad,
    loadingState: readLoadingState,
  } = useTasksLoader({ token });

  const { postCreateTask, loadingState: createLoadingState } = useTaskCreator();
  const { postDeleteTask, loadingState: deleteLoadingState } = useTaskDeleter();

  const isLoading = useMemo(
    () =>
      readLoadingState === LoadingState.loading ||
      createLoadingState === LoadingState.loading ||
      deleteLoadingState === LoadingState.loading,
    [readLoadingState, createLoadingState, deleteLoadingState]
  );

  const { data, onChange, clear: clearForm } = useCreateTaskForm();

  const { forceRedirectToLogin } = useRedirectOnSessionExpired("/");

  const onSubmit = useCallback(
    (data: CreateTaskFormData) => {
      if (token === null) {
        console.warn("Expected token not to be null. Redirecting to login.");
        return forceRedirectToLogin();
      }

      postCreateTask({ token, content: data.content })
        .then(() => {
          forceLoad().catch(() => {
            alert("Falha ao recarregar tasks.");
          });
          clearForm();
        })
        .catch(() => {
          alert("Falha ao criar task.");
        });
    },
    [token, postCreateTask, clearForm, forceLoad, forceRedirectToLogin]
  );

  const onClickDelete = useCallback(
    (task: Task) => {
      if (token === null) {
        console.warn("Expected token not to be null. Redirecting to login.");
        return forceRedirectToLogin();
      }

      postDeleteTask({
        token,
        taskId: task.id,
      })
        .then(() => {
          forceLoad().catch(() => {
            alert("Falha ao recarregar tasks.");
          });
        })
        .catch(() => {
          alert("Falha ao deletar task.");
        });
    },
    [token, postDeleteTask, forceLoad, forceRedirectToLogin]
  );

  return (
    <main>
      <NavHeader navItems={NavPages} />
      <section className={styles["tasks-section"]}>
        <LoadingBar height={2} active={isLoading} />
        <CreateTaskForm data={data} onChange={onChange} onSubmit={onSubmit} />
        <div className={styles["tasks-container"]}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClickDelete={() => onClickDelete(task)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tasks;
