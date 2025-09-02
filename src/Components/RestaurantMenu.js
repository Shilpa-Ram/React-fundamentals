import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
