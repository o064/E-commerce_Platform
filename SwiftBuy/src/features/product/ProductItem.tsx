import type { Product } from "../../types";

type ProductItemProps = {
  product: Product;
};
export function ProductItem({ product}: ProductItemProps) {
  const {  name: productName, price: productPrice, imgUrl: imageUrl } = product;
  return (
    <li>
      <img src={imageUrl} alt={productName} width={150} />
      <div>{productName}</div>
      <div>{productPrice}</div>
    </li>
  );
}
