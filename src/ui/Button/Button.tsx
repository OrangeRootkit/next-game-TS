import React, { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  des: boolean;
  asc: boolean;
  des_active: boolean;
  asc_active: boolean;
  play: boolean;
  again: boolean;
  name: string;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  des,
  asc,
  des_active,
  asc_active,
  text,
  play,
  again,
  handler,
  name,
  ...props
}) => {
  return (
    <>
      <button
        className={clsx(s.button, {
          [s.button__des]: des,
          [s.button__des_active]: des_active,
          [s.button__asc]: asc,
          [s.button__asc_active]: asc_active,
          [s.button__play]: play,
          [s.button__again]: again,
        })}
        name={name}
        onClick={(e) => handler(e)}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
