import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItem, Cart } from "../../types/cart";

const initialState : Cart = {
    items : [],
    totalQuantity : 0,
    totalAmount : 0,

}
const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers:{
        addItemtoCart(state, action : PayloadAction<cartItem>){
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalQuantity += newItem.quantity;
            state.totalAmount += newItem.totalPrice;
        },
        delItemFromCart(state, action : PayloadAction<string>){
            const id = action.payload;
            state.items.filter(item => item.id !== id);
            cartSlice.caseReducers.calcTotal(state);
        },
        calcTotal(state){
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        }
        ,
        increaseItemQuantity(state, action : PayloadAction<string>){
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if(item){
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
                cartSlice.caseReducers.calcTotal(state);
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
                cartSlice.caseReducers.calcTotal(state);
            }
        },
        clearCart(state){
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
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
  calcTotal,
} = cartSlice.actions;
// export reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;