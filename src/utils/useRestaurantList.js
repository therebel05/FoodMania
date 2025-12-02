import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const restaurantInfo = restaurants.map((r) => r.info);

    setRestaurantList(restaurantInfo);
  };

  return restaurantList;
};

export default useRestaurantList;
