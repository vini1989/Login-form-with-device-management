import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  id?: string;
  disabled?: boolean;
  title?: string;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}
