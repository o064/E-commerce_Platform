import type { Category, Size } from "../../types";
import type {  cartItem } from "../../types/cart";


export const fakeCart: cartItem[] = [
  {
    id: "c1",
    name: "Nike Air Max 270",
    category: "men" as Category,
    rand: "running",
    imgUrl: "https://demositefiles.blob.core.windows.net/images/catalog/270/nike-air-max-270.png",
    quantity: 2,
    unitPrice: 150,
    totalPrice: 2 * 150,
    selectedSize: "M" as Size,
    selectedColor: "Black",
  },
  {
    id: "c2",
    name: "Adidas Ultraboost",
    category: "women" as Category,
    rand: "training",
    imgUrl: "https://demositefiles.blob.core.windows.net/images/catalog/ultraboost/adidas-ultraboost.png",
    quantity: 1,
    unitPrice: 180,
    totalPrice: 1 * 180,
    selectedSize: "S" as Size,
    selectedColor: "White",
  },
  {
    id: "c3",
    name: "Converse Chuck Taylor",
    category: "unisex",
    rand: "casual",
    imgUrl: "https://demositefiles.blob.core.windows.net/images/catalog/converse/converse-chuck-taylor.png",
    quantity: 3,
    unitPrice: 70,
    totalPrice: 3 * 70,
    selectedSize: "L" as Size,
    selectedColor: "Red",
  },
];

