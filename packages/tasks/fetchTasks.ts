import { env } from "../config/env";
import { Task } from "./interfaces/Task";

interface FetchTasksResponse {
  tasks: Task[];
}

export const fetchTasks = async (token: string) =>
  fetch(`${env.BACKEND_URL}/tasks`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json() as Promise<FetchTasksResponse>);
