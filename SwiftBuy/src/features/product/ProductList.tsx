import type { Category, Product, ProductListItem } from '../../types';
import {productList, products} from './productData';
import { ProductItem } from './ProductItem';
type ProductListProps = {
  headerText?: string ;
  category: Category | 'featured';
};
function ProductList({headerText ,category} : ProductListProps) {
  return (
    <section>
    <h2>{headerText  || category }</h2>
    <ul>
      {productList.map((prodcut :ProductListItem) => (
        <ProductItem
          key={prodcut.id}
          product = {prodcut} />
      ))}
    </ul>
    <p>{products.length} Products</p>
    </section>
  );
}
export default ProductList;