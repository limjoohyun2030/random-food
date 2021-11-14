import styles from "./search_header.module.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

      <FontAwesomeIcon icon={}/>
    </header>
  );
};

export default SearchHeader;
