import React from 'react'
import styles from "../styles/Header.module.scss"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.name}>Ashish Rao</h2>
      <div className={styles.navContainer}>
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>

    </div>
  )
}

export default Header