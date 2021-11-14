import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {

  goToHome = () => {
    
  }

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
