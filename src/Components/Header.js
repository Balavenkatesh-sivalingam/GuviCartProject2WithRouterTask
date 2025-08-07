import { useContext} from "react"
import { Cart_Url } from "../../utils/source";
import { Link } from "react-router-dom";
import CartContext from "../../utils/customHooks/userGlobal";

const Header = () => {
  const { totalQuantity} = useContext(CartContext);
  
  return (
    <div className="head flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md">
      <div className="logo-container flex items-center gap-4">
        <img className="w-fit h-fit" alt="Cart Logo" src={Cart_Url} />
        <span className="text-2xl md:text-3xl  font-bold hover:text-rose-500">
          Fake Store
        </span>
      </div>
      <ul className="nav-bar flex gap-10 text-xl mt-4 md:mt-0">
        <li className="cursor-pointer hover:underline hover:text-rose-500">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:text-rose-500">
          <Link to="/About">About</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:text-rose-500">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="cursor-pointer hover:underline flex items-center gap-2">
          <Link to="/cart">
            Cart
            <span className="bg-rose-500 rounded-full px-2 py-0.5 text-sm font-semibold">{totalQuantity}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
