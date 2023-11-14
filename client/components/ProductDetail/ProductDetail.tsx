import Image from "next/image";
import { useState } from "react";

import css from "./ProductDetail.module.css";
import Button from "../Button/Button";
import NumberSelector from "../NumberSelector/NumberSelector";
import { IProduct } from "../../types/product";
import { formatPrice } from "../../services/product";
import { useCart } from "../../contexts/cart";

export interface IProductProps {
  product: IProduct;
}

export default function ProductDetail(props: IProductProps) {
  const { product } = props;
  const {
    brand,
    colour,
    description,
    height,
    id,
    img_url,
    length,
    model_code,
    name,
    power,
    price,
    quantity,
    weight,
  } = product;
  const [qty, setQty] = useState(1);
  const { setCart } = useCart();

  function handleAddToCart() {
    setCart((cart) => ({
      ...cart,
      products: {
        ...cart.products,
        [id]: {
          ...product,
          quantity: (cart.products[id]?.quantity ?? 0) + qty,
        },
      },
    }));
    setQty(1);
  }

  return (
    <main>
      <Image
        className={css.image}
        src={img_url}
        alt="Philips plumen"
        width={410}
        height={407}
        priority
        style={{
          objectFit: "contain",
          backgroundColor: "#f2f2f2",
        }}
      />
      <h1 className={css.title} data-testid="title">
        {name}
      </h1>
      <div className={css.subtitle}>
        {power} // Packet of {quantity}
      </div>
      <div className={css.addToCart}>
        <div className={css.priceRow}>
          <span className={css.price}>{formatPrice(price)}</span>
          <NumberSelector
            label="Qty"
            minValue={1}
            onChange={setQty}
            value={qty}
          />
        </div>
        <Button fullWidth onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
      <div className={css.description}>
        <h2 className={css.blockTitle}>Description</h2>
        <p>{description}</p>
      </div>
      <div className={css.specifications}>
        <h2 className={css.blockTitle} id="specifications">
          Specifications
        </h2>
        <ul aria-describedby="specifications" className={css.table}>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Brand</div>
            <div className={css.tableCell}>{brand}</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Item weight (g)</div>
            <div className={css.tableCell}>{weight}</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Dimensions (cm)</div>
            <div className={css.tableCell}>
              {height} x {length} x {length}
            </div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Item Model number</div>
            <div className={css.tableCell}>{model_code}</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Colour</div>
            <div className={css.tableCell}>{colour}</div>
          </li>
        </ul>
      </div>
    </main>
  );
}
