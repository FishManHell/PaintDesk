import { useResizeDetectorProps } from "react-resize-detector";
import { DefaultStorybookSizes } from "shared/types";
import { ReactNode } from "react";

interface ChildrenProps {
  width: number;
  height: number;
  origWidth: number;
  origHeight: number;
}

export interface ResizeContainerProps
  extends Omit<useResizeDetectorProps<HTMLDivElement>, "targetRef"> {
  className?: string;
  storybookSizes?: DefaultStorybookSizes;
  defaultSizes?: { width: number; height: number };
  children: ({
    width,
    height,
    origWidth,
    origHeight,
  }: ChildrenProps) => ReactNode;
  renderContent?: (width: number, height: number) => ReactNode;
}
