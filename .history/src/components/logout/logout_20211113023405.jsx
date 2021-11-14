import React, { useEffect } from "react";
import styles from "./logout.module.css";
import { useHistory } from "react-router";
import Header from "../header/header";

const Logout = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/random-food/");
      }
    });
  });

  return (
    <div>
      <Header onLogout={onLog}/>
    </div>
  );
};

export default Logout;
