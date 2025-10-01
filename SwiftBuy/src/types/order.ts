// Order-related types

import {  type Category, type Size } from "./product";

export type OrderItem = {
  productId: string;      // reference to Product.id
  quantity: number;
  selectedSize: Size;
  category : Category ;
  selectedColor?: string; // optional if color can vary
};

export type Order = {
  id: string;
  userId: string;        // who placed the order
  items: OrderItem[];
  totalPrice: number;
  status: "pending"  | "delivered" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
};
