import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget)
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
