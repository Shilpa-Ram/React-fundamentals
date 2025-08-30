import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
 const restaurantCard = resInfo?.cards?.find(
    (cardObj) =>
      cardObj.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
    const info = restaurantCard?.card?.card?.info;

  return !info ? (
    <Shimmer />
  ) : (
    <div className="menu">
    <h1>{info.name}</h1>
      <h1>{info.cuisines?.join(", ")}</h1>
      <h1>{info.costForTwo}</h1>
    </div>
  );
};

export default RestaurantMenu;
