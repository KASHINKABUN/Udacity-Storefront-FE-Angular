import { PRODUCT } from "./product";

export type ORDER_PRODUCT_REQ = {
  id: number;
  product_number: number;
}

export type ORDER_REQ = {
  cart_id: number;
  user_id: number;
  products: Array<ORDER_PRODUCT_REQ>;
}

export type ORDER = {
  id: number;
  product_name: string;
  product_description: string;
  product_image: string;
  first_price: string;
  discount_price: string;
  product_number: number;
  order_id: number;
  status: string;
  description: string;
}

export type ORDER_INFO = {
  id: number;
  user_id: number;
  status: string;
  description: string;
  total: string;
  method: string;
}

export type ORDER_RES = {
  order: ORDER_INFO,
  products: PRODUCT[]
}