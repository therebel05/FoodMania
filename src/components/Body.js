import { useEffect, useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const restaurantList = useRestaurantList();

  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

  const handleSearch = () => {
    const filteredList = restaurantList.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredList);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {restaurantList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
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
