import Brush from "shared/assets/icons/brush.svg";
import Line from "shared/assets/icons/pen.svg";
import Square from "shared/assets/icons/square.svg";
import Circle from "shared/assets/icons/circle.svg";
import Triangle from "shared/assets/icons/triangle.svg";
import { ToolMenuItem } from "./types/toolMenuItem";
import { Icon } from "shared/ui/Icon/Icon";

export const toolMenuItems: ToolMenuItem[] = [
  {
    key: "brush",
    label: "Brush",
    icon: <Icon Svg={Brush} width={30} height={30} />,
  },
  {
    key: "line",
    label: "Line",
    icon: <Icon Svg={Line} width={30} height={30} />,
  },
  {
    key: "rect",
    label: "Square",
    icon: <Icon Svg={Square} width={30} height={30} />,
  },
  {
    key: "circle",
    label: "Circle",
    icon: <Icon Svg={Circle} width={30} height={30} />,
  },
  {
    key: "triangle",
    label: "Triangle",
    icon: <Icon Svg={Triangle} width={30} height={30} />,
  },
];
