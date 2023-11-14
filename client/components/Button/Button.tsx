import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import css from "./Button.module.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  small?: boolean;
}

export default function Button(props: IButtonProps) {
  const { children, fullWidth = false, small = false, ...buttonProps } = props;
  return (
    <button
      className={classNames(css.button, {
        [css.buttonFull]: fullWidth,
        [css.buttonSmall]: small,
      })}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
