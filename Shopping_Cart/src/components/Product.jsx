import { useSelector,useDispatch } from "react-redux"
import { addCart, removeCart } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast"
const Product = ({ post }) => {
  // const [selected, setSelected] = useState(false);
  
  // console.log(useSelector((state) => state.cart))
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addCartItem = () =>{
    dispatch(addCart(post));
    toast.success("Item added Successfully");
  }

  const removeCartItem = ()=>{
    dispatch(removeCart(post.id));
    toast.error("Item removed Successfully");
    console.log(cart)
  }

  return (
    <div className="flex flex-col justify-between items-center mt-10 ml-5 py-3 px-4 
     shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-4 rounded-xl 
     hover:scale-110 hover:shadow-[0px_9px_105px_10px_#00000024] transition duration-300 group">

          <p className="font-bold text-gray-700 text-left text-lg w-40 truncate">{post.title}</p>
          <p className="w-40 text-gray-500 font-normal text-xs">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>

      <img src={post.image} className="h-32" />

      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-green-600 text-sm">${post.price}</p>
        {
          cart.some((p) => p.id == post.id) ? 
          <button onClick={removeCartItem} className="p-1 px-3 text-[12px] font-semibold rounded-full border-2 
          border-gray-700 bg-gray-700 text-white" >Remove Item</button>

          : <button onClick={addCartItem} className="p-1 px-3 text-[12px] font-semibold rounded-full text-gray-700 border-2 
          border-gray-700 group-hover:bg-gray-700 group-hover:text-white duration-300 ease-in">Add To Cart</button>
        }
      </div>
    </div>
  );
};

export default Product;
