import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div className="bg-slate-900 py-[0.5rem]">
      <div className="flex justify-between items-center max-w-[1080px] px-6 mx-auto w-screen">
        <NavLink to={"/"}>
          <img src="../logo.png" alt="Logo" className="w-[130px]" />
        </NavLink>

        <div className="flex items-center space-x-6">
          <NavLink to={"/"} className="text-white font-medium">
            Home
          </NavLink>
          <NavLink to={"/cart"} className="relative">
            <FaShoppingCart className="text-slate-200 text-lg"/>
          { cart.length > 0 &&
            <span className="absolute text-white -top-2 -right-2 bg-green-600 w-4 h-5
            text-xs flex justify-center items-center rounded-lg">{cart.length}</span>
          }
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
