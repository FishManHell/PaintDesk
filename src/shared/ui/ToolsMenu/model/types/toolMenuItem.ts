import { ReactNode } from "react";
import { ToolType } from "entities/Tool";

export type ToolMenuItem = {
  key: ToolType;
  label: string;
  icon?: ReactNode;
};
