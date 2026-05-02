"use client";

import { Product } from "@/types/api";
import { CartActionType, CartContextType, CartStateType } from "@/types/cart";
import { createContext, ReactNode, useReducer } from "react";

const initialState: CartStateType = {
  items: [],
  count: 0,
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

function CartReducer(state: CartStateType, action: CartActionType) {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  async function addToCart(product: Product) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch({ type: "Add", payload: product });
  }

  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
