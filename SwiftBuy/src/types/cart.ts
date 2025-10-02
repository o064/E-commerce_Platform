import type { Category, Size } from "./product"

export type cartItem = {
    id: string;
    name: string;
    category: Category | "unisex";
    brand: string;  // for feltering later
    imgUrl: string;
    quantity : number,
    unitPrice : number
    totalPrice : number, // quantity * unitPrice
    selectedSize : Size,
    selectedColor : string
}
export type Cart = {
    items : cartItem[]
}