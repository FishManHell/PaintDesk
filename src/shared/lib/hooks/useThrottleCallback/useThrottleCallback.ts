import { useCallback, useRef } from "react";

export function useThrottleCallback<F extends (...args: any[]) => void>(
  func: F,
  delay: number,
): (...args: Parameters<F>) => void {
  const lastCall = useRef(0);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (...args: Parameters<F>) => {
      const now = Date.now();

      if (now - lastCall.current < delay) {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(
          () => {
            lastCall.current = Date.now();
            func(...args);
          },
          delay - (now - lastCall.current),
        );
      } else {
        lastCall.current = now;
        func(...args);
      }
    },
    [func, delay],
  );
}
