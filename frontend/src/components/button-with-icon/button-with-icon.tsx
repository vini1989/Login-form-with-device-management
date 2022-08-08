import React, { FunctionComponentElement } from "react";
import Button from "../button/button";
import Icon from "../icon/icon";
import { ButtonWithIconProps } from "./button-with-icon.definitions";
import styles from "./button-with-icon.module.scss";
import cn from "classnames";

function ButtonWithIcon({
  iconName,
  className,
  onClick,
}: ButtonWithIconProps): FunctionComponentElement<ButtonWithIconProps> {
  return (
    <Button className={cn(className, styles.btnWithIcon)} onClick={onClick}>
      <Icon name={iconName} />
    </Button>
  );
}

export default ButtonWithIcon;
