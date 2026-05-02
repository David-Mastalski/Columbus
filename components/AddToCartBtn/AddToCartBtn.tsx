import styles from "./AddToCartBtn.module.css";
import IconCart from "../icons/IconCart";
import { Product } from "@/types/api";
import { useCart } from "@/hooks/useCart";

function AddToCartBtn({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className={styles.addToCartBtn}
      aria-label="Add to cart"
    >
      <IconCart />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;
