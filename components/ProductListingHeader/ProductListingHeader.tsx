import React from "react";
import styles from "./ProductListingHeader.module.css";

function ProductListingHeader({ title }: { title: string }) {
  return (
    <div className={styles.header}>
      <div className="container container-padd">
        <div className={styles.headerInner}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductListingHeader;
