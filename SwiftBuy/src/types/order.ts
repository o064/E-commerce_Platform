// Order-related types
import type { Cart } from "./cart";

export type OrderStatus = "pending"  | "delivered" | "cancelled";
export type newOrder =  Cart & {
  userId: string;        // who placed the order
  totalPrice: number;
  totalQuantity : number ; 
  status: OrderStatus;
};
export type Order = newOrder & {
  orderId: string;
  createdAt: Date;
  updatedAt: Date;
};
