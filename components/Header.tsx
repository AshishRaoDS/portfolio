import React from 'react';
import styles from "../styles/Header.module.scss";
import Poppins from "@next/font/google";

type Props = {};

// const poppins = Poppins({
//   weight: []
// })

const Header = (props: Props) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.name}>Ashish Rao</h2>
      <nav className={styles.navContainer}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>

    </div>
  );
};

export default Header;