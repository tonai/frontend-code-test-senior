import { useEffect, useState } from "react";

import ProductDetail from "../components/ProductDetail/ProductDetail";
import { getProduct } from "../services/product";
import { IProduct } from "../types/product";
import Layout from "../components/Layout/Layout";

export default function Product() {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct("1").then(setProduct);
  }, []);

  if (!product) {
    return null;
  }

  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
}
