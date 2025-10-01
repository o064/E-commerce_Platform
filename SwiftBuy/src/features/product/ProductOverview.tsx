import { useState } from 'react';
import type { Product } from '../../types';
import { formatCurrency } from '../../utils/helpers';
import { products } from './productData';

type ProductItemProps = {
  product: Product | null;
};

const testProduct: Product = products[0];

function ProductDetail({ product }: ProductItemProps) {
  // select product or fallback to test product
  const currentProduct = product ?? testProduct;
  const { name, category, brand, imgUrl, price, description, inventory } = currentProduct;
  // unique colors
  const colors = Array.from(new Set(inventory.map((i) => i.color)));
  // state to manage selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const selectedImage =
    currentProduct.inventory.find((i) => i.color === selectedColor && i.imgUrl)?.imgUrl || imgUrl;
  return (
    <div>
      <img src={selectedImage} alt={name} width={150} />
      <div>
        <h2>{name}</h2>
        <p>{formatCurrency(price)}</p>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
      </div>

      {/* Colors & Sizes */}
      <div>
        {colors.map((color) => {
          const sizes = inventory
            .filter((i) => i.color === color && i.stock > 0)
            .map((i) => i.size);

          return (
            <div key={color}>
              <p>{color}</p>
              {sizes.map((s) => (
                <button key={`${color}-${s}`}>{s}</button>
              ))}
            </div>
          );
        })}
      </div>

      {/* Quantity */}
      <div>
        <div>-</div>
        <input type="text" defaultValue={1} min={1} />
        <div>+</div>
      </div>

      {/* Add to cart */}
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
