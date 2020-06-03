import React from "react";
import FoodItem from "./FoodItem";
import "../App.css";

function MenuPreview(props) {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {props.menu.map((t) => (
          <FoodItem
            removable={true}
            key={t.id}
            item={t}
            removeItemFromSideBar={props.removeItemFromSideBar}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuPreview;
