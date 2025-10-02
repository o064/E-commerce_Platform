import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper
} from "@mui/material";
import CartItem from "./CartItem";
import { useAppSelector } from "../../hooks";
import { getCart } from "./cartSlice";


export default function CartTable() {
  // fetch cart items from redux store
  const cartItems = useAppSelector(getCart) ;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // Map through cart items and render CartItem component for each
            cartItems.map(item  => <CartItem item={item} key={item.id} />)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
