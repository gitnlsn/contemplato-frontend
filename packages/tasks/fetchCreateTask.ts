import { env } from "../config/env";
import { Task } from "./interfaces/Task";

interface FetchCreateTaskProps {
  token: string;
  content: string;
}

interface FetchCreateTasksResponse {
  tasks: Task[];
}

export const fetchCreateTask = ({ token, content }: FetchCreateTaskProps) =>
  fetch(`${env.BACKEND_URL}/tasks`, {
    method: "post",
    body:
      // Endpoint adapted to create single task
      JSON.stringify({ tasks: [{ content }] }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json() as Promise<FetchCreateTasksResponse>);
