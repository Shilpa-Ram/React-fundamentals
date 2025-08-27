import React, { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

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