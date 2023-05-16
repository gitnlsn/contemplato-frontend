import { useCallback, useEffect, useState } from "react";
import { Task } from "./interfaces/Task";
import { fetchTasks } from "./fetchTasks";
import { LoadingState } from "../utils/LoadingState";

interface UseTasksLoaderProps {
  token: string | null;
}

interface HookState {
  tasks: Task[];
  loadingState: LoadingState;
}

export const useTasksLoader = ({ token }: UseTasksLoaderProps) => {
  const [state, setState] = useState<HookState>({
    tasks: [],
    loadingState: LoadingState.idle,
  });

  const forceLoad: () => ReturnType<typeof fetchTasks> = useCallback(() => {
    if (token === null) {
      return Promise.reject(new Error("Missing auth token to load tasks"));
    }

    setState((current) => ({
      tasks: current.tasks,
      loadingState: LoadingState.loading,
    }));

    const promise = fetchTasks(token);

    promise
      .then((data) =>
        setState({
          tasks: data.tasks,
          loadingState: LoadingState.success,
        })
      )
      .catch((error) => {
        console.error(error);
        setState({
          tasks: [],
          loadingState: LoadingState.error,
        });
      });

    return promise;
  }, [setState, token]);

  useEffect(() => {
    if (token !== null) {
      forceLoad().catch(null);
    }
  }, [token, forceLoad]);

  return {
    ...state,
    forceLoad,
  };
};
