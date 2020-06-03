import React from "react";
import Dietary from "./Dietary";
import "../App.css";

function FoodItem(props) {
  const { item, addItemFromSideBar, removable } = props;
  const { name, dietaries } = item;
  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => addItemFromSideBar(item)}
      className="item"
    >
      <h2>{name}</h2>
      <p>
        {dietaries.map((d) => (
          <Dietary key={d} status={d} />
        ))}
      </p>
      {removable ? <button className="remove-item">x</button> : null}
    </li>
  );
}

export default FoodItem;
