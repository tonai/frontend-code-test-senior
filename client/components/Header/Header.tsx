import Image from "next/image";

import css from "./Header.module.css";
import { useCart } from "../../contexts/cart";

export default function Header() {
  const { cart } = useCart();
  const quantity = Object.values(cart.products).reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <header className={css.header}>
      <Image
        src="/octopus-logo.svg"
        alt="Octopus Energy Logo"
        width={192}
        height={27}
      />
      <div className={css.cart}>
        <Image src="/basket.svg" alt="Basket" width={30} height={27} />
        {quantity > 0 && (
          <div className={css.quantity} title="Basket items">
            {quantity}
          </div>
        )}
      </div>
    </header>
  );
}
