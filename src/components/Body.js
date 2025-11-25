import { useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState(resData);

  const handleSearch = () => {
    const filteredList = resData.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredList);
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
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
