import { HasClassName } from "../../shared/component.definitions";

export type Icons = "delete" | "add" | "edit";

export interface IconProps extends HasClassName {
  name: Icons;
  alt?: string;
}
