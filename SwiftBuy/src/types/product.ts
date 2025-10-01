export type Size = "S" | "M" | "L" | "XL"; 
export type Category = "women" | "kids" | "men";

export type InventoryItem = {
  color: string;
  size: Size;
  stock: number;  // how many are available
  imgUrl?: string;
};

export type Product = {
  id: string;
  name: string;
  category: Category;
  brand: string;
  imgUrl: string;
  price: number;
  description: string;
  inventory: InventoryItem[]; 
 }
