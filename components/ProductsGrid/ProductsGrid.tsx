"use client";

import styles from "./ProductsGrid.module.css";
import { useState } from "react";
import { Product } from "@/types/api";
import ChangeGridButton from "../ChangeGridButton/ChangeGridButton";
import ProductTile from "../ProductTile/ProductTile";

function ProductsGrid({ products }: { products: Product[] }) {
  const [isLargeGrid, setIsLargeGrid] = useState(false);

  return (
    <section>
      <div className="container container-padd">
        <div className={styles.topbar}>
          <ChangeGridButton
            isLargeGrid={isLargeGrid}
            handleClick={() => setIsLargeGrid((prev) => !prev)}
          />
        </div>
        <div
          id="products-list"
          className={`${styles.productsGrid} ${isLargeGrid ? styles["productsGrid--large"] : ""}`}
        >
          {products.map((p) => (
            <ProductTile key={p.articleNumber} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;
