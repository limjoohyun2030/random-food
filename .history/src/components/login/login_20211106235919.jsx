import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  // const onLogin = (event) => {
  //   authService //
  //     .login(event.currentTarget.textContent)
  //     .then(console.log);
  // };
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
        <button className={styles.button} onClick={onLogin}>

          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
