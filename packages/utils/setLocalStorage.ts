export const setLocalStorage = (key: string, object: any) => {
  if (object === null || object === undefined) {
    return localStorage.removeItem(key);
  }

  return localStorage.setItem(key, JSON.stringify(object));
};
