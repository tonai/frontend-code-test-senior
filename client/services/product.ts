import { IBaseProduct, IProduct } from "../types/product";
import { fetchGraphql } from "./graphql";

export async function getAllProducts(): Promise<IBaseProduct[]> {
  const data = await fetchGraphql<{ allProducts: IBaseProduct[] }>(`
{
  allProducts {
    id
  }
}`);
  return data.allProducts;
}

export async function getProduct(id: string): Promise<IProduct> {
  const data = await fetchGraphql<{ Product: IProduct }>(
    `
query Product($id: ID!) {
  Product(id: $id) {
    id
    name
    power
    description
    price
    quantity
    brand
    weight
    height
    length
    model_code
    colour
    img_url
  }
}`,
    `
{
  "id": ${id}
}
`
  );
  return data.Product;
}

const formatter = Intl.NumberFormat("en", {
  currency: "GBP",
  style: "currency",
});
export function formatPrice(price: number): string {
  return formatter.format(price / 100);
}
