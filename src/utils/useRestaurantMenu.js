import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { menus } from "./mockData";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    const fetchLocalMenu = () => {
      console.log("menu", menus);

      const restaurant = menus.find((r) => r.restaurant_id === resId);

      setRestaurantMenu(restaurant?.items || []);
    };

    fetchLocalMenu();
  }, [resId]);

  return restaurantMenu;
};

export default useRestaurantMenu;
