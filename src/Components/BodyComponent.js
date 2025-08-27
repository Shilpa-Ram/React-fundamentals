import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const json = await data.json();
  console.log(json);
  // Filter for restaurant cards
  const restaurants = json?.data?.cards
    ?.filter(cardObj => cardObj.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
    .map(cardObj => cardObj.card.card.info);
  setRestaurantList(restaurants || []);
}

// condional rendering
if(restaurantList.length === 0) {
  return <Shimmer/>;  
}

  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" />{" "}
        <button type="submit"> Search </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(restaurantList.filter(res => res.avgRating > 4));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.name} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;