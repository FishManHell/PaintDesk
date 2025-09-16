import cls from "./ToolsMenu.module.scss";
import classNames from "classnames";
import { Reactive } from "shared/ui/Reactive";
import { useStore } from "app/providers/MobXProvider";
import { Menu } from "antd";
import { ToolType } from "entities/Tool";
import { toolMenuItems } from "../model/items";

interface ToolsMenuProps {
  className?: string;
}

export const ToolsMenu = Reactive((props: ToolsMenuProps) => {
  const { className } = props;
  const { selectTool } = useStore();

  return (
    <div className={classNames(cls["tools-menu"], className)}>
      <Menu
        style={{ borderInlineEnd: "none" }}
        className={cls["menu"]}
        mode="vertical"
        selectedKeys={[selectTool.tool]}
        onClick={({ key }) => selectTool.setTool(key as ToolType)}
        items={toolMenuItems}
      />
    </div>
  );
});
