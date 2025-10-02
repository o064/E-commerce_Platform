import type { Category, Size } from "../../types";
import type { cartItem } from "../../types/cart";

export const fakeCart: cartItem[] = [
  {
    id: "c1",
    name: "Nike Air Max 270",
    category: "men",
    brand: "Nike",
    imgUrl:
      "https://demositefiles.blob.core.windows.net/images/catalog/270/nike-air-max-270.png",
    quantity: 2,
    unitPrice: 150,
    totalPrice: 2 * 150,
    selectedSize: "M",
    selectedColor: "Black",
  },
  {
    id: "c2",
    name: "Adidas Ultraboost 22",
    category: "women",
    brand: "Adidas",
    imgUrl:
      "https://demositefiles.blob.core.windows.net/images/catalog/ultraboost/adidas-ultraboost.png",
    quantity: 1,
    unitPrice: 180,
    totalPrice: 1 * 180,
    selectedSize: "S",
    selectedColor: "White",
  },
  {
    id: "c3",
    name: "Converse Chuck Taylor All Star",
    category: "unisex",
    brand: "Converse",
    imgUrl:
      "https://demositefiles.blob.core.windows.net/images/catalog/converse/converse-chuck-taylor.png",
    quantity: 3,
    unitPrice: 70,
    totalPrice: 3 * 70,
    selectedSize: "L",
    selectedColor: "Red",
  },
  {
    id: "c4",
    name: "Puma RS-X",
    category: "men",
    brand: "Puma",
    imgUrl:
      "https://demositefiles.blob.core.windows.net/images/catalog/puma/puma-rsx.png",
    quantity: 1,
    unitPrice: 120,
    totalPrice: 1 * 120,
    selectedSize: "XL",
    selectedColor: "Blue",
  },
];
