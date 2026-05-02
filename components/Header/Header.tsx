"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import Menu from "../Menu/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className={`container container-padd ${styles.header}`}>
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
