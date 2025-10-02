import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItem, Cart } from "../../types/cart";
import type { RootState } from "../../store";
import { fakeCart } from "./cartData";

const initialState : Cart = {
    items : fakeCart,
}
const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers:{
        addItemtoCart(state, action : PayloadAction<cartItem>){
            const newItem = action.payload;
            state.items.push(newItem);

        },
        delItemFromCart(state, action : PayloadAction<string>){
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        }
        ,
        increaseItemQuantity(state, action : PayloadAction<string>){
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if(item){
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseItemQuantity(state, action :PayloadAction<string> ){
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if(item){
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
                if(item.quantity === 0 )
                    cartSlice.caseReducers.delItemFromCart(state,action);
            }
        },
        clearCart(state){
            state.items = [];
        }
    }

})
// Action creators
export const {
  addItemtoCart,
  delItemFromCart,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;
// export reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

// selectors


// get all cart items
export const getCart  = (state :RootState) : cartItem[]=> state.cart.items;
// calculate total quantity
export const getTotalQuantity  = (state :RootState) : number =>
    state.cart.items.reduce((acc: number,item  : cartItem) => acc + item.quantity,0);
// calculate total amount
export const getTotalAmount  = (state:RootState):number =>
    state.cart.items.reduce((acc: number,item  : cartItem) => acc + item.totalPrice,0);
