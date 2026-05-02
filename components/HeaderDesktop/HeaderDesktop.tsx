import React from "react";
import styles from "./HeaderDesktop.module.css";
import Logo from "../Logo/Logo";
import CartButton from "../CartButton/CartButton";
import IconHeart from "../icons/IconHeart";
import HeaderActionBtn from "../HeaderActionBtn/HeaderActionBtn";
import IconUser from "../icons/IconUser";
import IconSearch from "../icons/IconSearch";

function HeaderDesktop() {
  return (
    <div className={styles.header}>
      <Logo />
      <div>
        <div className={`not-allowed ${styles.productSearchEngine}`}>
          <IconSearch />
          <span className={styles.placeholder}>Szukaj</span>
        </div>
      </div>
      <div className={styles.navBtns}>
        <div className={`headerNavBtns`}>
          <HeaderActionBtn
            ariaLabel="Sign in"
            label="Sign in"
            icon={<IconUser />}
            labelFirst={true}
          />
          <HeaderActionBtn ariaLabel="Favorite" icon={<IconHeart />} />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
