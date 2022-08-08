import { ReactNode } from "react";
import { HasClassName } from "../../shared/component.definitions";

export interface BasicTileProps extends HasClassName {
  leftSlot?: ReactNode;
  middleSlot?: ReactNode;
  rightSlot?: ReactNode;
}
