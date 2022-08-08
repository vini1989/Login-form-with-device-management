import * as React from "react";
import { FunctionComponentElement } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import useForm from "../../hooks/useForm";
import { LoginProps } from "./login.definitions";
import styles from "./login.module.scss";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const initialLoginValues: LoginProps = {
  name: "",
  email: "",
  password: "",
};

function validateLoginForm(formData: LoginProps): { [key: string]: string } {
  let errors: { [key: string]: string } = {};
  if (formData.name.length < 2) {
    errors.name = "Name should be atleast two characters";
  }
  if (!formData.email.match(emailRegex)) {
    errors.email = "Email is invalid. It should be in format x@y.com";
  }
  if (!formData.password.match(passwordRegex)) {
    errors.password =
      "Password must have atleast 8 charaters, 1 uppercase letter, 1 special character and 1 number";
  }
  return errors;
}

function Login({
  name,
  email,
  password,
}: LoginProps): FunctionComponentElement<LoginProps> {
  const navigate = useNavigate();

  function submitLoginForm(): void {
    navigate("/devices");
  }

  const { formData, errors, touched, handleChange, handleSubmit } = useForm(
    initialLoginValues,
    validateLoginForm,
    submitLoginForm
  );

  return (
    <div className={styles.root}>
      <div className={styles.loginContainer}>
        <h1 className={styles.heading}>Login</h1>
        <form className={styles.loginForm}>
          <div className={styles.inputLabelContainer}>
            <input
              className={styles.loginItem}
              type="text"
              id="name"
              name="name"
              placeholder=" "
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className={styles.loginLabel}>
              Name
            </label>
          </div>
          {errors.name && touched.name && (
            <div className={styles.showError}>{errors.name}</div>
          )}
          <div className={styles.inputLabelContainer}>
            <input
              className={styles.loginItem}
              type="text"
              id="email"
              name="email"
              placeholder=" "
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className={styles.loginLabel}>
              Email
            </label>
          </div>
          {errors.email && touched.email && (
            <div className={styles.showError}>{errors.email}</div>
          )}
          <div className={styles.inputLabelContainer}>
            <input
              className={styles.loginItem}
              type="password"
              id="password"
              name="password"
              placeholder=" "
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className={styles.loginLabel}>
              Password
            </label>
          </div>
          {errors.password && touched.password && (
            <div className={styles.showError}>{errors.password}</div>
          )}
          <Button
            className={styles.loginItem}
            id="loginbtn"
            fullWidth
            disabled={Object.keys(errors).length !== 0}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
