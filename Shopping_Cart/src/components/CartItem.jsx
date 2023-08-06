import { useDispatch } from "react-redux";
import { removeCart } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";


const CartItem = ({item}) => {
  
  const dispatch = useDispatch();
  
  const removeCartItem = ()=>{
    dispatch(removeCart(item.id));
    toast.error("Item Removed Successfully");
  }

  return (<div className="flex gap-24">
    <div>
      <img src={item.image} width={200}/>
    </div>
    <div>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <div className="flex justify-between">
        <p>{item.price}</p>
        <button onClick={removeCartItem}>
          <FcDeleteDatabase/>
        </button>
      </div>
    </div>
  </div>);
};

export default CartItem;
