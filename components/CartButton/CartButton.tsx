import React from "react";
import styles from "./CartButton.module.css";
import IconCart from "../icons/IconCart";
import { useCart } from "@/hooks/useCart";

function CartButton() {
  const {state} = useCart();
  const cartCount = state.count;

  return (
    <button
      className={`not-allowed ${styles.cartButton}`}
      aria-label="Checkout"
    >
      <span className={styles.cartIcon}>
        <IconCart />
      </span>
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </button>
  );
}

export default CartButton;
