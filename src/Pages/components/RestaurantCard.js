import { useContext } from 'react';
import UserContext from '../../utils/UserContext';

const RestaurantCard = (props) => {
  const resData = props.resData;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card">
      <img className="res-logo" src={resData.image} alt="" />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisine} cuisine</h4>
      <h4>{resData.rating} Rating</h4>
      <h4>{resData.cookTimeMinutes} mins</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
