import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { getAllProducts, getProduct } from "../../services/product";
import { IProduct } from "../../types/product";
import Layout from "../../components/Layout/Layout";

export default function Product(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { product } = props;
  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
}

export const getStaticProps = (async (context) => {
  const { params } = context;
  const product = await getProduct(params.id as string);
  return {
    props: {
      product,
    },
  };
}) satisfies GetStaticProps<{
  product: IProduct;
}>;

export const getStaticPaths = (async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));
  return { paths, fallback: "blocking" };
}) satisfies GetStaticPaths;
