import React from "react";
import FoodItem from "./FoodItem";
import "../App.css";

const fuck = {
  id: 1001,
  name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
  dietaries: ["v", "ve", "df", "gf", "n!"],
};
function MenuPreview() {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        <FoodItem
          removable={true}
          key={fuck.id}
          item={fuck}
          // addItemFromSideBar={props.addItemFromSideBar}
        />
        <FoodItem
          removable={true}
          key={fuck.id}
          item={fuck}
          // addItemFromSideBar={props.addItemFromSideBar}
        />
        <FoodItem
          removable={true}
          key={fuck.id}
          item={fuck}
          // addItemFromSideBar={props.addItemFromSideBar}
        />
      </ul>
    </div>
  );
}

export default MenuPreview;
