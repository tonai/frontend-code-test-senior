import { IProduct } from "./product";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICart {
  products: Record<string, ICartProduct>;
}
