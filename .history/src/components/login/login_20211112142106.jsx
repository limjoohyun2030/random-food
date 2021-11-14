import React from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToHome = () => {
    history.push({
      path: '/home',
      state:{id:}
    });
  };

  const onLogin = () => {
    authService //
      .login()
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <button className={styles.button} onClick={onLogin}>
        Login by Google
      </button>
    </section>
  );
};

export default Login;
