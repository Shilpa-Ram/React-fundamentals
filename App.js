import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, deliveryTime, costForTwo } =
    props?.resData;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y0fjz8h4ad8nfzkmbznu"
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    name: "Meghana Foods",
    cuisines: ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese"],
    avgRating: "4.5",
    sla: {
      deliveryTime: 30,
    },
    costForTwo: "₹400 for two",
  },
  {
    name: "Biryani By Kilo",
    cuisines: [
      "Biryani",
      "Hyderabadi",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: "4.1",
    deliveryTime: 34,
    costForTwo: "₹500 for two",
  },
  {
    name: "Hotel Empire",
    cuisines: ["Kebabs", "Biryani"],
    avgRating: "4.4",
    sla: {
      deliveryTime: 48,
    },
    costForTwo: "₹450 for two",
  },
  {
    name: "Sharief Bhai Biryani",
    cuisines: [
      "Biryani",
      "shawarma",
      "Kebabs",
      "Mughlai",
      "Arabian",
      "rolls",
      "Street Food",
      "Tea",
      "Desserts",
      "Beverages",
    ],
    avgRating: "4.2",
    deliveryTime: 23,
    costForTwo: "₹400 for two",
  },
  {
    name: "Anjappar",
    cuisines: [
      "Chettinad",
      "Biryani",
      "South Indian",
      "Chinese",
      "Grill",
      "Seafood",
      "North Indian",
      "Desserts",
      "Beverages",
    ],
    avgRating: "4",
    deliveryTime: 53,
    costForTwo: "₹600 for two",
  },
  {
    name: "Breeze Restaurant",
    cuisines: [
      "Chinese",
      "Kerala",
      "South Indian",
      "Hyderabadi",
      "Indian",
      "Beverages",
      "Ice Cream",
      "Juices",
      "Tandoor",
      "North Indian",
    ],
    avgRating: "4.5",
    deliveryTime: 26,
    costForTwo: "₹800 for two",
  },
  {
    name: "Nandhana Palace",
    cuisines: ["Andhra", "Biryani"],
    avgRating: "4.3",
    deliveryTime: 42,
    costForTwo: "₹500 for two",
  },
];

const BodyComponent = () => (
  <div className="body">
    <div className="search">
      <input type="text" className="search-box" />{" "}
      <button type="submit"> Search </button>
    </div>
    <div className="restaurant-list">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.name} resData={restaurant} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
