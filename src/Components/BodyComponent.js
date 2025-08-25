import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => (
  <div className="body">
    <div className="search">
      <input type="text" className="search-box" />{" "}
      <button type="submit"> Search </button>
    </div>
     <div className="filter">
      <button className="filter-btn" onClick={()=> {console.log('button clicked')}}> Top rated Restaurants </button>
    </div>
    <div className="restaurant-list">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.name} resData={restaurant} />
      ))}
    </div>
  </div>
);

export default BodyComponent;