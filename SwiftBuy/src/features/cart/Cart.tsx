import { Link } from 'react-router-dom';
import CartTable from './CartTable';
import CartSummary from './CartSummary';



function Cart() {
  return (
    <div>
      <h2>Your cart, %NAME%</h2>
      <div>
        <CartTable/>
        <CartSummary  />
      </div>
      <div>
        <Link to="/order/new">Order</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
