import React from "react";
import FoodItem from "./FoodItem";
import "../App.css";
import items from "../items";

function SideBar(props) {
  return (
    <div className="col-4">
      <ul className="item-picker">
        {items.map((i) => (
          <FoodItem
            removable={false}
            key={i.id}
            item={i}
            addItemFromSideBar={props.addItemFromSideBar}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
