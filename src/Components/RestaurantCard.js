import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, costForTwo } =
    props?.resData;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={LOGO_URL}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;