export const getLocalStorage = <StoredDataType = any>(
  key: string
): StoredDataType | null => {
  const value = localStorage.getItem(key);

  if (value === null) {
    return null;
  }

  return JSON.parse(value);
};
