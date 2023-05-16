import React, { createContext, useCallback, useMemo } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";
import { LoginPayload, LoginResponse, fetchLogin } from "./fetchLogin";

interface LoginContextProps {
  token: string | null;
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  clear: () => void;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

interface LoginProviderProps {
  children: React.ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const { data, setValue } = useLocalStorage<string>("login-token");

  const login = useCallback(
    (data: Parameters<typeof fetchLogin>[0]) => {
      const promise = fetchLogin(data);

      promise
        .then((data) => {
          if (data) {
            setValue(data.token);
          }
        })
        .catch(console.error);

      return promise;
    },
    [setValue]
  );

  const clear = useCallback(() => {
    setValue(null);
  }, [setValue]);

  const value = useMemo(
    () => ({
      login,
      token: data,
      clear,
    }),
    [login, data, clear]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
