import { useEffect } from "react";

type UseEffectProps = Parameters<typeof useEffect>;

type UseEffectDebounceProps = [
  effect: UseEffectProps[0],
  timeout: number,
  deps?: UseEffectProps[1]
];

export const useEffectDebounce: (...args: UseEffectDebounceProps) => void = (
  effect,
  timeout,
  deps
) => {
  useEffect(() => {
    const timeoutId = setTimeout(effect, timeout);

    return () => clearTimeout(timeoutId);
  }, [deps]);
};
