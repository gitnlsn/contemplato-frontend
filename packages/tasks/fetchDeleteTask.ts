import { env } from "../config/env";
import { Task } from "./interfaces/Task";

interface FetchDeleteTaskProps {
  token: string;
  taskId: string;
}

interface FetchDeleteTasksResponse {
  task: Task;
}

export const fetchDeleteTask = ({ token, taskId }: FetchDeleteTaskProps) =>
  fetch(`${env.BACKEND_URL}/tasks`, {
    method: "delete",
    body: JSON.stringify({ taskId }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json() as Promise<FetchDeleteTasksResponse>);
