import { Link } from "react-router";
import type {  ProductListItem } from "../../types";

type ProductItemProps = {
  product: ProductListItem;
};
export function ProductItem({ product}: ProductItemProps) {
  const {  name: productName, price: productPrice, imgUrl: imageUrl , category } = product;
  return (
    <Link to={`/${category}/${product.id}`}>
      <img src={imageUrl} alt={productName} width={150} />
      <div>{productName}</div>
      <div>{productPrice}</div>
    </Link>
  );
}
