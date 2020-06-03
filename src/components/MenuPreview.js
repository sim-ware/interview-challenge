import React from "react";
import FoodItem from "./FoodItem";
import "../App.css";

const test = [
  {
    id: 1001,
    name: "Kale Caesar Pasta",
    dietaries: ["v", "ve"],
  },
  {
    id: 1002,
    name: "Turmeric Satay Broccoli",
    dietaries: ["df", "gf"],
  },
  {
    id: 1003,
    name: "Lemon Cashew Greens",
    dietaries: ["n!"],
  },
];
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
            // addItemFromSideBar={props.addItemFromSideBar}
          />
        ))}
        {/* <FoodItem
          removable={true}
          key={test[0].id}
          item={test[0]}
          // addItemFromSideBar={props.addItemFromSideBar}
        />
        <FoodItem
          removable={true}
          key={test[1].id}
          item={test[1]}
          // addItemFromSideBar={props.addItemFromSideBar}
        />
        <FoodItem
          removable={true}
          key={test[2].id}
          item={test[2]}
          // addItemFromSideBar={props.addItemFromSideBar}
        /> */}
      </ul>
    </div>
  );
}

export default MenuPreview;
