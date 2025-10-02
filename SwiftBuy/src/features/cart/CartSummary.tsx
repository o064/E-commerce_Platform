import { formatCurrency } from "../../utils/helpers";
import { fakeCart } from "./cartData";


function CartSummary() {
    const {totalAmount, totalQuantity} = fakeCart;
    return (
        <div>
            <h2>Order summary</h2>
            <div>
                <span>Total Items</span>
                <span>{ totalQuantity || 0 }</span>
            </div>
            <div>
                <span>total</span>
                <span>{formatCurrency(totalAmount || 0 )}</span>
            </div>
        </div>
    )
}

export default CartSummary;
