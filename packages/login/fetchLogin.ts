import { env } from "../config/env";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const fetchLogin = (payload: LoginPayload) => {
  return fetch(`${env.BACKEND_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json() as Promise<LoginResponse>);
};
