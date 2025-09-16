import classNames from "classnames";
import { ColorPicker } from "antd";
import { strokeStore } from "entities/Stroke";
import { Reactive } from "shared/ui/Reactive";

interface CustomColorPickerProps {
  className?: string;
}

export const CustomColorPicker = Reactive((props: CustomColorPickerProps) => {
  const { className } = props;

  const onChangeColor = (_: unknown, hex: string) => {
    strokeStore.color = hex;
  };

  return (
    <ColorPicker
      className={classNames("custom-color-picker", className)}
      value={strokeStore._color}
      onChange={onChangeColor}
    />
  );
});
