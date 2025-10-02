import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { cartItem } from "../../types/cart";
import Button from "../../ui/Button";
type cartItemProp = {
  item : cartItem ;
}
function CartItem({ item } : cartItemProp) {
  const { imgUrl , name : itemName, selectedSize : size, selectedColor : color, unitPrice  , totalPrice} = item;
  return (
    <TableRow>
      {/* Product */}
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src= {imgUrl}
            alt= {itemName}
            width={60}
          />
          <div>
            <Typography variant="subtitle1">{itemName}</Typography>
            <Typography variant="body2">Size: {size}</Typography>
            <Typography variant="body2">Color: {color}</Typography>
            <Button >Remove</Button>
          </div>
        </div>
      </TableCell>

      {/* Price */}
      <TableCell>{unitPrice}</TableCell>

      {/* Quantity */}
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small">
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" style={{ margin: '0 8px' }}>
            1
          </Typography>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </div>
      </TableCell>
      {/* Total */}
      <TableCell>{totalPrice}</TableCell>
    </TableRow>
  );
}

export default CartItem;
