import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function RestaurantDetails() {
  const { id } = useParams();

  const data = useRestaurantMenu(id);
  console.log(data);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log("item: ", item);
    dispatch(addItem(item));
  };

  return (
    <div className="text-center m-auto">
      {data.map((item) => (
        <div
          className="flex justify-between items-center p-4 m-4 border-b"
          key={item.item_id}
        >
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-gray-500 text-sm font-bold">
            Rs. {item.price / 100}
          </p>
          <div className="relative">
            <img
              className="w-24 rounded-lg"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/25/2180518c-2138-44ed-afb3-3a6a22d17040_1106214%20(1).jpg"
              alt={`image of ${item.name.slice(0, 5)}`}
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
}
