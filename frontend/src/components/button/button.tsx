import React from "react";
import cn from "classnames";
import { FunctionComponentElement } from "react";
import { ButtonProps } from "./button.definitons";
import styles from "./button.module.scss";

function Button({
  onClick,
  id,
  disabled,
  title,
  fullWidth,
  className,
  children,
}: ButtonProps): FunctionComponentElement<ButtonProps> {
  const classNames = cn(className, styles.button, {
    [styles.buttonFullwidth]: fullWidth,
  });
  return (
    <button
      className={classNames}
      id={id}
      disabled={disabled}
      title={title}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
