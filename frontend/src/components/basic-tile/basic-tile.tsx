import React, { FunctionComponentElement } from "react";
import cn from "classnames";
import { BasicTileProps } from "./basic-tile.definitions";
import styles from "./basic-tile.module.scss";

function BasicTile({
  leftSlot,
  middleSlot,
  rightSlot,
  className,
}: BasicTileProps): FunctionComponentElement<BasicTileProps> {
  return (
    <div className={cn(styles.basicTile, className)}>
      {leftSlot && (
        <span className={cn(styles.slots, styles.left)}>{leftSlot}</span>
      )}
      {middleSlot && <span className={styles.slots}>{middleSlot}</span>}
      {rightSlot && (
        <span className={cn(styles.slots, styles.right)}>{rightSlot}</span>
      )}
    </div>
  );
}

export default BasicTile;
