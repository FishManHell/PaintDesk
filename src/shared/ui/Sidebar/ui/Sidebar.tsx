import cls from "./Sidebar.module.scss";
import classNames from "classnames";
import { Reactive } from "shared/ui/Reactive";
import { useStore } from "app/providers/MobXProvider";
import { Menu, Tag } from "antd";
import { ToolType } from "entities/Tool";
import { toolMenuItems } from "../model/items";
import { StrokeWidthSlider } from "widgets/StrokeWidthSlider";

interface ToolsMenuProps {
  className?: string;
}

export const Sidebar = Reactive((props: ToolsMenuProps) => {
  const { className } = props;
  const { selectTool, strokeStore } = useStore();

  const onChangeComplete = (num: number) => (strokeStore.width = num);

  return (
    <div className={classNames(cls["sidebar-menu"], className)}>
      <Menu
        style={{ borderInlineEnd: "none" }}
        className={cls["menu"]}
        mode="vertical"
        selectedKeys={[selectTool.tool]}
        onClick={({ key }) => selectTool.setTool(key as ToolType)}
        items={toolMenuItems}
      />

      <div className={cls["sidebar-menu-stroke-slider-wrapper"]}>
        <Tag color={"red"} className={cls["stroke-slider-text"]}>
          Stroke Width: {strokeStore._width}px
        </Tag>
        <StrokeWidthSlider
          className={cls["stroke-slider"]}
          onChangeComplete={onChangeComplete}
          tooltip={{ formatter: (v) => `${v}px` }}
        />
      </div>
    </div>
  );
});
