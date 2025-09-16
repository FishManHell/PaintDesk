import { CustomColorPicker } from "widgets/CustomColorPicker";
import {
  ClearOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "colorPicker",
    label: <CustomColorPicker />,
  },
  {
    key: "zoomIn",
    icon: <ZoomInOutlined />,
  },
  {
    key: "zoomOut",
    icon: <ZoomOutOutlined />,
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
