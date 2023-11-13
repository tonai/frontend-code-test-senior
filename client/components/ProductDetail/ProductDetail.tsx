import Image from "next/image";

import css from "./ProductDetail.module.css";
import Button from "../Button/Button";
import NumberSelector from "../NumberSelector/NumberSelector";
import { useState } from "react";

export default function ProductDetail() {
  const [qty, setQty] = useState(1);

  return (
    <main>
      <Image
        className={css.image}
        src="/philips-plumen.jpg"
        alt="Philips plumen"
        width={410}
        height={407}
      />
      <h1 className={css.title}>Energy saving light bulb</h1>
      <div className={css.subtitle}>25W // Packet of 4</div>
      <div className={css.addToCart}>
        <div className={css.priceRow}>
          <span className={css.price}>£12.99</span>
          <NumberSelector
            label="Qty"
            minValue={1}
            onChange={setQty}
            value={qty}
          />
        </div>
        <Button fullWidth>Add to cart</Button>
      </div>
      <div className={css.description}>
        <h2 className={css.blockTitle}>Description</h2>
        <p>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wait around warm start and flicker free
          features make for a great all pupose bulb
        </p>
      </div>
      <div className={css.specifications}>
        <h2 className={css.blockTitle} id="specifications">
          Specifications
        </h2>
        <ul aria-describedby="specifications" className={css.table}>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Brand</div>
            <div className={css.tableCell}>Phillips</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Item weight (g)</div>
            <div className={css.tableCell}>77</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Dimensions (cm)</div>
            <div className={css.tableCell}>12.6 x 6.2 x 6.2</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Item Model number</div>
            <div className={css.tableCell}>E27 ES</div>
          </li>
          <li className={css.tableRow}>
            <div className={css.tableCell}>Colour</div>
            <div className={css.tableCell}>Cool daylight</div>
          </li>
        </ul>
      </div>
    </main>
  );
}
