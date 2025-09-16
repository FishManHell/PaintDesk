import { Reactive } from "shared/ui/Reactive";
import {
  ResizeContainer,
  ResizeContainerProps,
} from "shared/ui/ResizeContainer";
import { FC } from "react";

export const MobXResizeContainer: FC<ResizeContainerProps> =
  Reactive(ResizeContainer);
