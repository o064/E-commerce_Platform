import type { Product } from "../../types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Nike Air Zoom Pegasus",
    category: "men",
    brand: "Nike",
    imgUrl: "https://via.placeholder.com/300x200?text=Nike+Default",
    price: 120,
    description: "Lightweight running shoes designed for comfort and speed.",
    inventory: [
      { color: "Black", size: "M", stock: 5, imgUrl: "https://via.placeholder.com/300x200?text=Nike+Black" },
      { color: "Black", size: "L", stock: 0, imgUrl: "https://via.placeholder.com/300x200?text=Nike+Black" },
      { color: "Black", size: "XL", stock: 2, imgUrl: "https://via.placeholder.com/300x200?text=Nike+Black" },
      { color: "White", size: "S", stock: 10, imgUrl: "https://via.placeholder.com/300x200?text=Nike+White" },
      { color: "White", size: "M", stock: 3, imgUrl: "https://via.placeholder.com/300x200?text=Nike+White" },
      { color: "White", size: "L", stock: 1, imgUrl: "https://via.placeholder.com/300x200?text=Nike+White" },
    ],
  },
];
