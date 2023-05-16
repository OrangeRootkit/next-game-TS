import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import s from "./Range.module.scss";
import clsx from "clsx";

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  optionList: string[];
  small: boolean;
  value: string;
  rangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Range: FC<RangeProps> = ({
  text,
  optionList,
  small,
  value,
  rangeHandler,
  ...props
}) => {
  return (
    <div
      className={
        small
          ? clsx(s.wrapper, s.wrapper__small)
          : clsx(s.wrapper, s.wrapper__large)
      }
    >
      <h2 className={s.title}>{text}</h2>
      <datalist
        id="option_list"
        className={
          small
            ? clsx(s.option, s.option__small)
            : clsx(s.option, s.option__large)
        }
      >
        {optionList.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </datalist>
      <input
        className={
          small ? clsx(s.range, s.range__small) : clsx(s.range, s.range__large)
        }
        id="option_list"
        name="range"
        type="range"
        min={small ? "2" : "1"}
        // max={small ? "5" : "6"}
        max={small ? "5" : "5"}
        step="1"
        value={value}
        onChange={(e) => rangeHandler(e)}
      />
    </div>
  );
};

export default Range;
