import { createSlice } from "@reduxjs/toolkit";

// slice banane ke liye usme teen cheez honi chahiye 
// 1. name 
// 2. initial state 
// 3. reducer action

const initialState = {
    value : 0
}

export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1;
        },

        decrement : (state) => {
            state.value -=1;
        },  
    },
});

export const {decrement,increment} = CounterSlice.actions;

export default CounterSlice.reducer;

