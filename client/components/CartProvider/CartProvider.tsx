import { ReactNode, useMemo, useState } from "react";

import { cartContext } from "../../contexts/cart";
import { ICart } from "../../types/cart";

export interface ICartProviderProps {
  children: ReactNode;
}

export default function CartProvider(props: ICartProviderProps) {
  const { children } = props;
  const [cart, setCart] = useState<ICart>({ products: {} });
  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart]
  );

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
