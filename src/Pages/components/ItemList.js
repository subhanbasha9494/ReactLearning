import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ data }) => {

  const dispatch = useDispatch();

  const handleAddItem = () => {
    //dispatch An action
    dispatch(addItem("IceCream"))
  }
  return (
    <div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div key={index}>{item}</div>
          <button className="p-2 bg-black text-white" onClick={() => handleAddItem(item)}>Add + </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemList;
