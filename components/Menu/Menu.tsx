import React from "react";
import styles from "./Menu.module.css";
import HeaderActionBtn from "../HeaderActionBtn/HeaderActionBtn";
import IconUser from "../icons/IconUser";
import IconHeart from "../icons/IconHeart";

function Menu({ isOpen }: { isOpen: boolean }) {
  return (
    <div id="main-nav" className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.userCTA}>
        <h2 className={styles.heading}>User</h2>
        <div className={styles.userCTAList}>
          <HeaderActionBtn
            ariaLabel="Sign in"
            label="Sign in"
            icon={<IconUser />}
          />
          <HeaderActionBtn
            ariaLabel="Favorite"
            label="Favorite"
            icon={<IconHeart />}
          />
        </div>
      </div>
      <nav className={styles.nav}>
        <h2 className={styles.heading}>Menu</h2>
        <ul>
          <li>
            <a href="#" className={styles.navLink}>
              Category 1
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Category 2
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Category 3
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Category 4
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
