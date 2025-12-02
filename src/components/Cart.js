import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-auto p-4 ">
      <h2 className="font-bold text-2xl">Cart Details</h2>
      <button
        className="bg-black text-white p-1 rounded-lg mt-2 cursor-pointer"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      {cartItems?.map((item) => (
        <div
          className="flex justify-between items-center p-4 m-4 border-b w-6/12 mx-auto"
          key={item?.item_id}
        >
          <h3 className="text-xl font-bold">{item?.name}</h3>
          <p className="text-gray-500 text-sm font-bold">
            Rs. {item?.price / 100}
          </p>
          <div className="relative">
            <img
              className="w-24 rounded-lg"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/25/2180518c-2138-44ed-afb3-3a6a22d17040_1106214%20(1).jpg"
              alt={`image of ${item?.name?.slice(0, 5)}`}
            />
            <button
              className="absolute top-1 right-0 left-1 p-1 opacity-80 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer"
              onClick={() => handleAdd(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
