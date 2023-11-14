import { Dispatch, SetStateAction, createContext, useContext } from "react";

import { ICart } from "../types/cart";

export interface ICartContext {
  cart: ICart;
  setCart: Dispatch<SetStateAction<ICart>>;
}

export const cartContext = createContext<ICartContext>(undefined);

export function useCart(): ICartContext {
  return useContext(cartContext);
}
