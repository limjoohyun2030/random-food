import React from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  goToHome = () => {};

  const onLogin = () => {
    authService //
      .login()
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <button className={styles.button} onClick={onLogin}>
        Google
      </button>
    </section>
  );
};

export default Login;
