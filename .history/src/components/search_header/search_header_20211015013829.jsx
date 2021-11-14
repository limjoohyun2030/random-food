import styles from "./search_header.module.css";
import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.foodIcon} src="images/foodIcon.jpg" alt="logo" />
        <h1 className={styles.title}>Random Food</h1>
      </div>

      <div>
        <button
          className={styles.reloadBox}
          onClick={() => window.location.reload(false)}
        >
          <img
            className={styles.reloadBtn}
            src="/images/reloadIcon.png"
            alt="reload"
          />
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
