import React from 'react';
import styles from './logout.module;
import { useHistory } from 'react-router';

const Logout = (props) => (
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
          <button onClick={onLogout}>Click me</button>
        </div>
      );
    );

export default Logout;