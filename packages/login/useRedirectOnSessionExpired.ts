import { useCallback, useContext } from "react";
import { LoginContext } from "./LoginContext";
import { useEffectDebounce } from "../utils/useEffectDebounce";

export const useRedirectOnSessionExpired = (linkUrl: string) => {
  const { token } = useContext(LoginContext);

  const forceRedirectToLogin = useCallback(() => {
    window.location.replace(linkUrl);
  }, [linkUrl]);

  useEffectDebounce(
    () => {
      if (token === null) {
        alert("Sessão expirada");
        window.location.replace(linkUrl);
      }
    },
    100,
    [token]
  );

  return {
    forceRedirectToLogin,
  };
};
