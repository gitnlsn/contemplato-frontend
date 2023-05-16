import { useCallback, useState } from "react";
import { Task } from "./interfaces/Task";
import { LoadingState } from "../utils/LoadingState";
import { fetchDeleteTask } from "./fetchDeleteTask";

interface HookState {
  task: Task | null;
  loadingState: LoadingState;
}

export const useTaskDeleter = () => {
  const [state, setState] = useState<HookState>({
    task: null,
    loadingState: LoadingState.idle,
  });

  const postDeleteTask: typeof fetchDeleteTask = useCallback(
    ({ token, taskId }) => {
      if (token === null) {
        return Promise.reject(new Error("Missing auth token to load tasks"));
      }

      setState((current) => ({
        task: current.task,
        loadingState: LoadingState.loading,
      }));

      const promise = fetchDeleteTask({ token, taskId });

      promise
        .then((data) =>
          setState(() => {
            return {
              task: data.task,
              loadingState: LoadingState.success,
            };
          })
        )
        .catch((error) => {
          console.error(error);
          setState({
            task: null,
            loadingState: LoadingState.error,
          });
        });

      return promise;
    },
    [setState]
  );

  return {
    ...state,
    postDeleteTask,
  };
};
