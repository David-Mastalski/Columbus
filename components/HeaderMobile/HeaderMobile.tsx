import { Dispatch, SetStateAction } from "react";
import styles from "./HeaderMobile.module.css";
import IconSearch from "../icons/IconSearch";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";
import CartButton from "../CartButton/CartButton";
import Logo from "../Logo/Logo";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function HeaderMobile({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <div className={styles.header}>
      <Logo />

      <div className="headerNavBtns">
        <button className="not-allowed">
          <IconSearch />
        </button>

        <CartButton />

        <button
         onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          title={isOpen ? "Close menu" : "Open menu"}
          aria-controls="main-nav"
        >
          {isOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
}

export default HeaderMobile;
