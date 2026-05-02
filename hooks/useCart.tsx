import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Hook useCart must be used within CartProvider");
  }

  return context;
}
