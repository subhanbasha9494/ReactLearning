import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
const Layout = () => {
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const {loggedInUser,setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/recipes');
        const json = await data.json();
        setListofRestaurants(json?.recipes);
        setFilterRestaurant(json?.recipes);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline!! Please check your internet connection</h1>
        )
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <>
            <div>
                <div className="flex p-4 gap-4">
                    <div className="flex">
                        <input 
                            type="text" 
                            className="px-4 py-2 border rounded-l-md focus:outline-none" 
                            value={searchText} 
                            onChange={(e) => setSearchText(e.target.value)} 
                        />
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                            onClick={() => {
                                const filterRestaurant = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilterRestaurant(filterRestaurant);
                            }}
                        >Search</button>
                    </div>
                    <div>
                        <button 
                            type="button" 
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            onClick={() => {
                                const filteredList = listOfRestaurants.filter((res) => res.rating > 4.7);
                                setFilterRestaurant(filteredList);
                            }}
                        >Top Rated Restaurants</button>
                    </div>

                    <div className="flex items-center">
                        <label>UserName: </label>
                        <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>
                <div className="card-align">
                    {filterRestaurant.map((res) => (
                        <Link key={res.id} to={"/restaurant/" + res.id}>{res.prepTimeMinutes > 30 ? ( <RestaurantCardPromoted resData={res}/>) : (<RestaurantCard resData={res} />)}</Link>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Layout;