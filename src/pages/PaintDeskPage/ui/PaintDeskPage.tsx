import cls from "./PaintDeskPage.module.scss";
import classNames from "classnames";
import { ToolsMenu } from "shared/ui/ToolsMenu";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { DrawingCanvas } from "features/DrawingCanvas";

interface DeskProps {
  className?: string;
}

export const PaintDeskPage = ({ className }: DeskProps) => {
  return (
    <div className={classNames(cls["desk"], className)}>
      <Navbar className={cls["desk-nav"]} />
      <section className={cls["desk-body"]}>
        <ToolsMenu />
        <div className={cls["desk-resize-wrapper"]}>
          <DrawingCanvas />
        </div>
      </section>
    </div>
  );
};
