import React from 'react'
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.uprayss}>UpRayss</div>
      <a className={styles.faq}>FAQ</a>
      <a className={styles.home}>{`Home `}</a>
      <a className={styles.contactUs}>Contact us</a>
    </nav>
  );
};

export default NavBar;
