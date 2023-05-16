import { useCallback, useEffect, useState } from "react";
import { getLocalStorage } from "./getLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

export const useLocalStorage = <StoredDataType>(key: string) => {
  const [data, setData] = useState<StoredDataType | null>(null);

  useEffect(() => {
    setData(getLocalStorage(key));
  }, [key]);

  const setValue = useCallback((value: StoredDataType | null) => {
    setLocalStorage(key, value);
    setData(value);
  }, []);

  return {
    data,
    setValue,
  };
};
