import "./StrokeWidthSlider.scss";
import { Slider, SliderSingleProps } from "antd";
import { memo, useCallback, useState } from "react";
import classNames from "classnames";

interface StrokeWidthSliderProps
  extends Omit<SliderSingleProps, "value" | "onChange"> {
  className?: string;
  defaultValue?: number;
}

export const StrokeWidthSlider = memo((props: StrokeWidthSliderProps) => {
  const {
    className,
    max = 50,
    min = 1,
    onChangeComplete,
    defaultValue = 1,
    tooltip,
  } = props;
  const [value, setValue] = useState<number>(defaultValue);

  const onChange = useCallback((newValue: number) => setValue(newValue), []);

  const handleComplete = useCallback(
    (newValue: number) => onChangeComplete?.(newValue),
    [onChangeComplete],
  );

  return (
    <div className={classNames("ant-slider-custom-wrapper", className)}>
      <Slider
        min={min}
        max={max}
        value={value}
        onChangeComplete={handleComplete}
        tooltip={tooltip}
        onChange={onChange}
        className={"ant-slider-custom"}
      />
    </div>
  );
});
