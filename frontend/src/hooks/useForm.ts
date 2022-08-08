import { ChangeEvent, useState } from "react";
import { UseFormProps } from "./useForm.definitions";

function initializeTouched(formData: any): any {
  const touched: { [key: string]: boolean } = {};
  Object.keys(formData).map((key) => (touched[key] = false));
  return touched;
}

export default function useForm(
  initialValues: any,
  validate: (formData: any) => any,
  submit: () => void
): UseFormProps {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState(validate(formData));
  const [touched, setTouched] = useState(initializeTouched(formData));

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    var newFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newFormData);
    setErrors(validate(newFormData));
    var newTouched = { ...touched, [event.target.name]: true };
    setTouched(newTouched);
  }

  function handleSubmit(): void {
    submit();
  }

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleSubmit,
  };
}
