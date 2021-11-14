import styles from "./search_header.module.css";
import React from "react";

const SearchHeader = ({ onRefreshClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <img
          className={styles.foodIcon}
          src="https://github.com/Sweetpotatopizza/random-food/blob/main/public/images/reloadIcon.png"
          alt="logo"
        /> */}
        <h1 className={styles.title}>Random Food</h1>
      </div>
      <div>
        <button className={styles.reloadBox} onClick={onRefreshClick}>
          Refresh
          {/* <img
            className={styles.reloadBtn}
            src="/images/reload.png"
            alt="reload"
          /> */}
        </button>
      </div>
      {/* fontawesome needed */}
      <div className={}>
        <button className={styles.like}>Like</button>
        <button className={styles.user}>User</button>
      </div>
    </header>
  );
};

export default SearchHeader;
