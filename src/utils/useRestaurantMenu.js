import { useEffect } from 'react';
import { useState } from 'react';

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch('https://dummyjson.com/recipes/' + resId + '');
    const json = await data.json();
    setRestaurantInfo(json);
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
