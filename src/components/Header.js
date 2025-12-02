import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between border-b-2 border-b-gray-200">
      <img
        src={LOGO_URL}
        alt="logo"
        style={{ width: "100px", cursor: "pointer" }}
      />
      <nav>
        <ul className="flex justify-center">
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4">Orders</li>
          <li className="p-4 m-4 font-bold">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <li className="p-4 m-4">Account</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
