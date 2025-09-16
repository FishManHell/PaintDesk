import cls from "./Icon.module.scss";
import { SVGProps, ElementType } from "react";
import classNames from "classnames";

interface IconProps {
  className?: string;
  color?: string;
  Svg: ElementType<SVGProps<SVGSVGElement>>;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const {
    className,
    Svg,
    width,
    height,
    color = "#000000",
    fill = "transparent",
  } = props;
  return (
    <Svg
      className={classNames(cls["icon"], className)}
      width={width}
      height={height}
      style={{ color, fill }}
    />
  );
};
