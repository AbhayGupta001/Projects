import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState : [] ,
    reducers: {
        addCart : (state,actions)=>{
            state.push(actions.payload);
        },
        removeCart : (state,actions)=>{
            return state.filter((p)=>p.id !== actions.payload)
        }
    }
});

export const{addCart , removeCart} = CartSlice.actions;

export default CartSlice.reducer;