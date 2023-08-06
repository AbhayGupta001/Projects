import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount , setTotalAmount] = useState(0);
  useEffect(()=>{  
    setTotalAmount(
      cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart]);

  console.log(totalAmount)

  return (
    <div>
      {
        cart.length ? 
        (
          <div className="flex gap-28">
            <div>
              {cart.map((item) => <CartItem key={item.id} item={item}/>)}
            </div>
            <div>
              <div>
                <p>Your Cart</p>
                <h2>Summary</h2>
                <p>Total length: {cart.length}</p>
                <button>Checkout Now</button>
              </div>
              <div>
                <p>Total Amount : <span>${totalAmount}</span></p>
              </div>
            </div>
          </div>
        ) 

        :
        (
          <div>
            <p>Empty</p>
            <NavLink to={"/"}>
              <button>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
