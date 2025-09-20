import "./Navbar.scss";
import classNames from "classnames";
import { Menu } from "antd";
import { Reactive } from "shared/ui/Reactive";
import { useStore } from "app/providers/MobXProvider";
import { items } from "../model/items";

interface NavbarProps {
  className?: string;
}

export const Navbar = Reactive((props: NavbarProps) => {
  const { className } = props;
  const { drawingStore, zoomStore, dragStore } = useStore();

  const handlers: Record<string, () => void> = {
    undo: () => drawingStore.undo(),
    redo: () => drawingStore.redo(),
    clear: () => drawingStore.reset(),
    zoom: () => zoomStore.toggleZoomMode(),
    drag: () => dragStore.toggle(),
  };

  return (
    <nav className={classNames("navbar", className)}>
      <Menu
        mode="horizontal"
        items={items}
        className={"navbar-menu"}
        onClick={(e) => handlers[e.key] && handlers[e.key]()}
        selectedKeys={[
          ...(zoomStore._isZoomMode ? ["zoom"] : []),
          ...(dragStore._isDragging ? ["drag"] : []),
        ]}
      />
    </nav>
  );
});
