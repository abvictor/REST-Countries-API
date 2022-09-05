import React from "react";
import { BsMoon } from "react-icons/bs";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3>Where in the world?</h3>
      <button className={styles.button_theme}>
        <span>
          <BsMoon />
        </span>
        <p>Dark Mode</p>
      </button>
    </header>
  );
};

export default Header;
