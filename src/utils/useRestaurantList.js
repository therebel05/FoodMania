import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

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
  };

  return restaurantList;
};

export default useRestaurantList;
