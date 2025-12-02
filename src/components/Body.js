import { useContext, useEffect, useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const restaurantList = useRestaurantList();

  console.log("restaurantList", restaurantList);

  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

  const handleSearch = () => {
    const filteredList = restaurantList.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredList);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div>
      <div className="m-4">
        <input
          className="border border-gray-300 mx-8 p-2 rounded-lg"
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-orange-200 py-2 px-8 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
        <input
          type="text"
          className="border border-black m-4 py-2 px-8 rounded-lg"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {restaurantList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-4 gap-5 m-8">
          {filteredRestaurantList.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              <RestaurantCard {...restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
