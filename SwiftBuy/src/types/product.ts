export type Size = "S" | "M" | "L" | "XL";

export type Category = "women" | "kids" | "men" ; 
// "unisex" = can be for men & women

export type InventoryItem = {
  color: string;
  size: Size;
  stock: number;  // available stock
  imgUrl?: string; // optional: different photo per variant
};

// "Lite" product for list views
export type ProductListItem = {
  id: string;
  name: string;
  category: Category | "unisex";
  brand: string;  // for feltering later
  imgUrl: string;
  price: number;
};

//  Full product for detail page
export type Product = ProductListItem & {
  description: string;
  inventory: InventoryItem[];

};
