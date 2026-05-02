import styles from "./ProductTile.module.css";
import Image from "next/image";
import { Product } from "@/types/api";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

function ProductTile({ product }: { product: Product }) {
  function getDiscountedPrice(price: number, discount: number) {
    return (price * (1 - discount / 100)).toFixed(2);
  }

  return (
    <article className={styles.tile}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image.url}
          alt={product.image.altText || product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <AddToCartBtn product={product} />
      </div>

      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.brandName}>{product.brandName}</span>
        </div>
        {product.promotion ? (
          <div>
            <div className={styles.discountPriceRow}>
              <span className={styles.price}>
                {getDiscountedPrice(
                  product.price,
                  product.promotion.percentage,
                )}{" "}
                $
              </span>
              <span className={styles.percentageDiscount}>
                -{product.promotion.percentage}%
              </span>
            </div>
            <div className={styles.regularPrice}>
              <span>Regular Price:</span>
              <span className={styles.oldPrice}>{product.price} $</span>
            </div>
          </div>
        ) : (
          <span className={styles.price}>{product.price} $</span>
        )}
        <p className={styles.description}>{product.description}</p>
      </div>
    </article>
  );
}

export default ProductTile;
