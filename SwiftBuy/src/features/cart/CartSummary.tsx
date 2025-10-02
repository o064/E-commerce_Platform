import { useAppSelector } from "../../hooks";
import { formatCurrency } from "../../utils/helpers";
import { getTotalAmount, getTotalQuantity } from "./cartSlice";


function CartSummary() {
    // Calculate total quantity and total amount from redux store
    const totalQuantity = useAppSelector(getTotalQuantity);
    const totalAmount = useAppSelector(getTotalAmount);
    return (
        <div>
            <h2>Order summary</h2>
            <div>
                <span>Total Items: </span>
                <span>{ totalQuantity || 0 }</span>
            </div>
            <div>
                <span>total: </span>
                <span>{formatCurrency(totalAmount || 0 )}</span>
            </div>
        </div>
    )
}

export default CartSummary;
