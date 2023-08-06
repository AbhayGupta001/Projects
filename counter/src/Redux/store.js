import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";

// ye ek centeralized store hai jahan pr jitne bhi slice hain sb isme combine honge

const store =  configureStore({
    //is store ke liye iski slice ki list yaani iske actions ki list reducer main jayegi
    reducer:{
        counter:  CounterSlice,
    }
});

export default store;