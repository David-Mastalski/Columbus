import { Product } from "./api";

export type CartStateType = {
  items: Product[];
  count: number;
};

export type CartActionType = { type: "Add"; payload: Product };

export type CartContextType = {
  state: CartStateType;
  addToCart: (product: Product) => Promise<void>;
};
