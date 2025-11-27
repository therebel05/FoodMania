import { useEffect, useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2018083&lng=85.79357139999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const restaurantInfo = restaurants.map((r) => r.info);

    setRestaurantList(restaurantInfo);
    setFilteredRestaurantList(restaurantInfo);
  };

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
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
