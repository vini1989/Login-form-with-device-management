import cn from "classnames";
import React, { FunctionComponentElement } from "react";
import { IconProps } from "./icon.definitions";

import styles from "./icon.module.scss";

function Icon({
  name,
  alt,
  className,
}: IconProps): FunctionComponentElement<IconProps> {
  return (
    <img
      className={cn(styles.icon, className)}
      alt={alt}
      src={`/images/${name}.jpeg`}
    />
  );
}

export default Icon;
