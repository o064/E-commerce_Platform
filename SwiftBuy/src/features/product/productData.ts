import type { Product } from "../../types";
import type { ProductListItem } from "../../types";

export const productList: ProductListItem[] = [
  {
    id: "p1",
    name: "Nike Air Zoom Pegasus",
    category: "men",
    brand: "Nike",
    imgUrl: "https://via.placeholder.com/300x200?text=Nike+Pegasus",
    price: 120,
  },
  {
    id: "p2",
    name: "Adidas Ultraboost 22",
    category: "men",
    brand: "Adidas",
    imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Ultraboost",
    price: 180,
  },
  {
    id: "p3",
    name: "Puma RS-X",
    category: "women",
    brand: "Puma",
    imgUrl: "https://via.placeholder.com/300x200?text=Puma+RSX",
    price: 100,
  },
  {
    id: "p4",
    name: "Converse Chuck Taylor",
    category: "unisex",
    brand: "Converse",
    imgUrl: "https://via.placeholder.com/300x200?text=Converse+Chuck",
    price: 70,
  },
  {
    id: "p5",
    name: "Adidas Superstar Kids",
    category: "kids",
    brand: "Adidas",
    imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Superstar+Kids",
    price: 60,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Nike Air Zoom Pegasus",
    category: "men",
    brand: "Nike",
    imgUrl: "https://via.placeholder.com/300x200?text=Nike+Pegasus",
    price: 120,
    description: "Lightweight running shoes designed for speed and comfort.",
    inventory: [
      { color: "Black", size: "M", stock: 5, imgUrl: "https://via.placeholder.com/300x200?text=Nike+Black" },
      { color: "Black", size: "L", stock: 2, imgUrl: "https://via.placeholder.com/300x200?text=Nike+Black" },
      { color: "White", size: "S", stock: 8, imgUrl: "https://via.placeholder.com/300x200?text=Nike+White" },
      { color: "White", size: "M", stock: 3, imgUrl: "https://via.placeholder.com/300x200?text=Nike+White" },
    ],
  },
  {
    id: "p2",
    name: "Adidas Ultraboost 22",
    category: "men",
    brand: "Adidas",
    imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Ultraboost",
    price: 180,
    description: "High-performance running shoes with superior cushioning.",
    inventory: [
      { color: "Blue", size: "M", stock: 4, imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Blue" },
      { color: "Blue", size: "L", stock: 6, imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Blue" },
      { color: "Grey", size: "XL", stock: 2, imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Grey" },
    ],
  },
  {
    id: "p3",
    name: "Puma RS-X",
    category: "women",
    brand: "Puma",
    imgUrl: "https://via.placeholder.com/300x200?text=Puma+RSX",
    price: 100,
    description: "Trendy sneakers with a retro design and bold colors.",
    inventory: [
      { color: "Pink", size: "M", stock: 7, imgUrl: "https://via.placeholder.com/300x200?text=Puma+Pink" },
      { color: "Pink", size: "L", stock: 0, imgUrl: "https://via.placeholder.com/300x200?text=Puma+Pink" },
      { color: "Black", size: "S", stock: 5, imgUrl: "https://via.placeholder.com/300x200?text=Puma+Black" },
    ],
  },
  {
    id: "p4",
    name: "Converse Chuck Taylor",
    category: "unisex",
    brand: "Converse",
    imgUrl: "https://via.placeholder.com/300x200?text=Converse+Chuck",
    price: 70,
    description: "Classic high-top sneakers for everyday casual wear.",
    inventory: [
      { color: "White", size: "M", stock: 6, imgUrl: "https://via.placeholder.com/300x200?text=Converse+White" },
      { color: "Black", size: "L", stock: 0, imgUrl: "https://via.placeholder.com/300x200?text=Converse+Black" },
      { color: "Red", size: "S", stock: 4, imgUrl: "https://via.placeholder.com/300x200?text=Converse+Red" },
    ],
  },
  {
    id: "p5",
    name: "Adidas Superstar Kids",
    category: "kids",
    brand: "Adidas",
    imgUrl: "https://via.placeholder.com/300x200?text=Adidas+Superstar+Kids",
    price: 60,
    description: "Iconic sneakers redesigned for kids with durable comfort.",
    inventory: [
      { color: "White", size: "S", stock: 10, imgUrl: "https://via.placeholder.com/300x200?text=Superstar+White" },
      { color: "Black", size: "M", stock: 5, imgUrl: "https://via.placeholder.com/300x200?text=Superstar+Black" },
      { color: "Pink", size: "S", stock: 3, imgUrl: "https://via.placeholder.com/300x200?text=Superstar+Pink" },
    ],
  },
];
