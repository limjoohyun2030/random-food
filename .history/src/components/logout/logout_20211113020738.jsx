import React from "react";
import styles from "./logout.module";
import { useHistory } from "react-router";

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
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
