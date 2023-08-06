import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/Slices/CounterSlice";

// ab redux store ko consume krna hai 

export const Counter = () => {
  // jo hamari value thi initial state ki current vo nikal li 
  const count  = useSelector((state) => state.counter.value);

  // ye hamare reducer actions ko use krne ke liye hai
  const dispatch = useDispatch();

  // const count  = 0; 
  console.log(count);
  return (
    <div>
      <button onClick= {() => dispatch(increment()) }>Increment</button>
      <p>{count}</p>
      <button onClick= {() => dispatch(decrement()) }>Decrement</button>
    </div>
  );
};
