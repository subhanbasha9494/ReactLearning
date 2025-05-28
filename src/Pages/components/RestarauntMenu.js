import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId);
    if (restaurantInfo === null) return <Shimmer />;
    return (
        <div>
             <RestaurantCategory data={restaurantInfo} />
        </div>
    )
}

export default RestaurantMenu;