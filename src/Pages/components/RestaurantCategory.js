import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showAccordian, setShowAccordian] = useState(false);
    const handleClick = () => {
        setShowAccordian(!showAccordian)
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.name}</span>
                    <span>⬇️</span>
                </div>
                {showAccordian && <ItemList data={data.mealType}/> }
            </div>

        </div>
    )
}

export default RestaurantCategory;