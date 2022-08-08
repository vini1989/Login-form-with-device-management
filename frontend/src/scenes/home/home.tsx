import * as React from "react";
import { FunctionComponentElement } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import styles from "./home.module.scss";

function Home(): FunctionComponentElement<void> {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Welcome</h1>
        <Button
          className={styles.button}
          fullWidth
          onClick={() => navigate("/login")}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Home;
