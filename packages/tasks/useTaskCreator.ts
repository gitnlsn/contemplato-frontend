import { useCallback, useState } from "react";
import { Task } from "./interfaces/Task";
import { LoadingState } from "../utils/LoadingState";
import { fetchCreateTask } from "./fetchCreateTask";

interface HookState {
  task: Task | null;
  loadingState: LoadingState;
}

export const useTaskCreator = () => {
  const [state, setState] = useState<HookState>({
    task: null,
    loadingState: LoadingState.idle,
  });

  const postCreateTask: typeof fetchCreateTask = useCallback(
    ({ token, content }) => {
      if (token === null) {
        return Promise.reject(new Error("Missing auth token to load tasks"));
      }

      setState((current) => ({
        task: current.task,
        loadingState: LoadingState.loading,
      }));

      const promise = fetchCreateTask({ token, content });

      promise
        .then((data) =>
          setState(() => {
            if (data.tasks.length === 1) {
              return {
                task: data.tasks[0],
                loadingState: LoadingState.success,
              };
            }

            return {
              task: null,
              loadingState: LoadingState.error,
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
    postCreateTask,
  };
};
