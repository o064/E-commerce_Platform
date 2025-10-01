import type { Product } from '../../types';
import {products} from './productData';
import { ProductItem } from './ProductItem';

function ProductList() {
  return (
    <ul>
      {products.map((prodcut:Product) => (
        <ProductItem
          key={prodcut.id}
          product = {prodcut} />
      ))}
    </ul>
  );
}
export default ProductList;