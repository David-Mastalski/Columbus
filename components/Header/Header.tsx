"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import Menu from "../Menu/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container container-padd`}>
        <div className={styles.headerInner}>
          <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          <HeaderDesktop />
          <Menu isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
