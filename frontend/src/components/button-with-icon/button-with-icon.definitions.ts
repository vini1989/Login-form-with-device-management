import { HasClassName } from "../../shared/component.definitions";
import { ButtonProps } from "../button/button.definitons";
import { Icons } from "../icon/icon.definitions";

export interface ButtonWithIconProps extends HasClassName, ButtonProps {
  iconName: Icons;
}
