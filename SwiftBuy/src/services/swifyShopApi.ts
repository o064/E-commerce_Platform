import type { Category, newOrder, Order, Product, ProductListItem } from "../types";

const APIURL:string = "https://api.swifyshop.com";

export async function fetchProducts(category: Category):Promise<ProductListItem[]> {
  const response = await fetch(`${APIURL}/${category}`); 
  if(!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const  data = await response.json();
  return data;
};

export async function fetchProductById(category: Category, id: string) : Promise<Product> {
    const response = await fetch(`${APIURL}/${category}/${id}`);
    if(!response.ok) {  
        throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    return data;
}
export async function fetchOrderById(id : string) {
    const response = await fetch(`${APIURL}/order/${id}`);
    if(!response.ok) {  
        throw new Error('Failed to fetch order');
    }
    const data = await response.json();
    return data;
}
export async function createOrder(newOrder : newOrder ) : Promise<Order> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newOrder),
    };
    const response = await fetch(`${APIURL}/order/new` , requestOptions);
    if(!response.ok) {  
        throw new Error('Failed to create order');
    }
    const data = await response.json();
    return data;
}