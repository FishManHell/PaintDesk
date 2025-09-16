import { observer } from "mobx-react-lite";
import { FC } from "react";

export function Reactive<T extends object>(Component: FC<T>): FC<T> {
  return observer(Component);
}
