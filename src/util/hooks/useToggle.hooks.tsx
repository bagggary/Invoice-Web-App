import { useState, useMemo } from "react";

type ToggleHandlers = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

function useToggle(initialState: boolean = false): [boolean, ToggleHandlers] {
  const [toggle, set] = useState(initialState);

  const handlers = useMemo(
    () => ({
      on: () => {
        set(true);
      },
      off: () => {
        set(false);
      },
      toggle: () => {
        set((prev) => !prev);
      },
    }),
    [toggle, set]
  );
  return [toggle, handlers];
}

export { useToggle };
