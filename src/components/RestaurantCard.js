import { useContext } from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  console.log(props);

  const { loggedInUser } = useContext(UserContext);

  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } = props;
  return (
    <div className="h-auto p-4">
      <img
        className="w-60 h-60 rounded-2xl object- bg-no-repeat"
        src={CLOUDINARY_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-2 text-lg">{name}</h3>
      <p className="text-gray-400">Rating: {avgRating}</p>
      <p className="text-gray-400">{props.sla.deliveryTime} mins</p>
      <p className="text-gray-400">{costForTwo}</p>
      <p className="text-gray-400">
        {cuisines.slice(0, 2).join(", ")}
        {cuisines.length > 2 ? "..." : ""}
      </p>
      <p>{loggedInUser}</p>
    </div>
  );
};

export default RestaurantCard;
