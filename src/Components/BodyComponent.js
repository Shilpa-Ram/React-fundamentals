import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    // Filter for restaurant cards
    const restaurants = json?.data?.cards
      ?.filter(
        (cardObj) =>
          cardObj.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((cardObj) => cardObj.card.card.info);
    setRestaurantList(restaurants || []);
    setFilteredRestaurantList(restaurants || []);
  };
const isOnline = useOnlineStatus();
if(!isOnline) {
  return <h1>🔴 Offline, Please check your internet connection!!</h1>
}
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
         <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button onClick={()=> {
          const filteredList = restaurantList.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurantList(filteredList);
        }}> Search </button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.avgRating > 4)
            );
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.name} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
