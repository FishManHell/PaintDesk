import { CustomColorPicker } from "widgets/CustomColorPicker";
import {
  ClearOutlined,
  DragOutlined,
  RedoOutlined,
  SearchOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "colorPicker",
    label: <CustomColorPicker />,
  },
  {
    key: "zoom",
    label: "Zoom",
    icon: <SearchOutlined />,
  },
  {
    key: "drag",
    label: "Drag",
    icon: <DragOutlined />,
  },
  {
    key: "undo",
    label: "Undo",
    icon: <UndoOutlined />,
  },
  {
    key: "redo",
    label: "Redo",
    icon: <RedoOutlined />,
  },
  {
    key: "clear",
    label: "Clear",
    icon: <ClearOutlined />,
  },
];
