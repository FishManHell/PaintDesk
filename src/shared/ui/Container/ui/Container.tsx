import cls from "./Container.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";

interface WrapperProps {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: WrapperProps) => {
  return (
    <div className={classNames(cls["wrapper"], className)}>{children}</div>
  );
};
