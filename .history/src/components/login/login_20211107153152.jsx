import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  // const Login = () => {

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <div className={styles.item}>
        <button className={styles.button} onClick={onLogin}></button>
      </div>
    </section>
  );
};

export default Login;
