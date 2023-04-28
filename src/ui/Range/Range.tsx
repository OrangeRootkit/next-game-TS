import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import s from "./Range.module.scss";
import clsx from "clsx";

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  optionList: string[];
  small: boolean;
  rangeHandler: (e:React.ChangeEvent<HTMLInputElement>) => any
}

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   text: string;
//   des: boolean;
//   asc: boolean;
//   des_active: boolean;
//   asc_active: boolean;
//   play: boolean;
//   again: boolean;
// }

const Range: FC<RangeProps> = ({ text, optionList, small, rangeHandler, ...props }) => {
  console.log(optionList);
  console.log("small", small);

  return (
    <div
      className={
        small
          ? clsx(s.wrapper, s.wrapper__small)
          : clsx(s.wrapper, s.wrapper__large)
      }
    >
      <h2 className={s.title}>{text}</h2>
      <div
        id="id"
        className={
          small
            ? clsx(s.option, s.option__small)
            : clsx(s.option, s.option__large)
        }
      >
        {optionList.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </div>
      <input
        className={
          small ? clsx(s.range, s.range__small) : clsx(s.range, s.range__large)
        }
        id="range"
        name="range"
        type="range"
        min="1"
        max={small ? "4" : "6"}
        step="1"
        list="id"
        onChange = {(e)=>rangeHandler(e)}
      />
    </div>
  );
};

export default Range;
