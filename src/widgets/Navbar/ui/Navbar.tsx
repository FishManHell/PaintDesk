import "./Navbar.scss";
import classNames from "classnames";
import { Menu } from "antd";
import { Reactive } from "shared/ui/Reactive";
import { useStore } from "app/providers/MobXProvider";
import { items } from "../model/items";
import { StrokeWidthSlider } from "widgets/StrokeWidthSlider";

interface NavbarProps {
  className?: string;
}

export const Navbar = Reactive((props: NavbarProps) => {
  const { className } = props;
  const { drawingStore, zoomStore, strokeStore } = useStore();

  const handlers: Record<string, () => void> = {
    undo: () => drawingStore.undo(),
    redo: () => drawingStore.redo(),
    clear: () => drawingStore.reset(),
    zoomIn: () => zoomStore.zoomIn(),
    zoomOut: () => zoomStore.zoomOut(),
  };

  const onChangeComplete = (num: number) => (strokeStore.width = num);

  return (
    <nav className={classNames("navbar", className)}>
      <Menu
        mode="horizontal"
        items={items}
        className={"navbar-menu"}
        onClick={(e) => handlers[e.key] && handlers[e.key]()}
      />
      <StrokeWidthSlider
        className={"navbar-stroke-slider"}
        onChangeComplete={onChangeComplete}
        tooltip={{ formatter: (v) => `${v}px` }}
      />
    </nav>
  );
});
