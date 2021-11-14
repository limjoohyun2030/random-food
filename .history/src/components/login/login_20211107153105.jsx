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
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>

          {/* <button className={styles.button}>Google</button> */}
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>
    <button></button>
          {/* <button className={styles.button}>Github</button> */}
        </li>
      </ul>
    </section>
  );
};

export default Login;
