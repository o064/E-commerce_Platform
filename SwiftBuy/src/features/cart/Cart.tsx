import { Link } from 'react-router-dom';
import CartTable from './CartTable';
import CartSummary from './CartSummary';
import Button from '../../ui/Button';
import { useAppDispatch } from '../../hooks';
import { clearCart } from './cartSlice';


function Cart() {
  const  dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <CartTable/>
        <CartSummary  />
      </div>
      <div>
        <Link to="/order/new">Order</Link>
        <Button onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
