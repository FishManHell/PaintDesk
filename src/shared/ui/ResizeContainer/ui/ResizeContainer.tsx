import classNames from "classnames";
import cls from "./ResizeContainer.module.scss";
import { FC, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import { ResizeContainerProps } from "../model/types/resizeContainerProps";

const isStorybook = __PROJECT__ === "storybook";

export const ResizeContainer: FC<ResizeContainerProps> = (props) => {
  const { className, children, storybookSizes, ...useResizeProps } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const originalSize = useRef<{ width: number; height: number } | null>(null);

  const { width: detectedWidth = 0, height: detectedHeight = 0 } = isStorybook
    ? { width: storybookSizes?.width, height: storybookSizes?.height }
    : useResizeDetector({ targetRef: containerRef, ...useResizeProps });

  if (!originalSize.current && detectedWidth > 0 && detectedHeight > 0) {
    originalSize.current = { width: detectedWidth, height: detectedHeight };
  }

  return (
    <div
      className={classNames(cls["resize-container"], className)}
      ref={containerRef}
    >
      {children({
        width: detectedWidth,
        height: detectedHeight,
        origHeight: originalSize.current?.height ?? detectedHeight,
        origWidth: originalSize.current?.width ?? detectedWidth,
      })}
    </div>
  );
};
