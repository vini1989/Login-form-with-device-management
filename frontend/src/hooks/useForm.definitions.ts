import { ChangeEvent } from "react";

export interface UseFormProps {
  handleChange(ev: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(): void;
  formData: any;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
}
