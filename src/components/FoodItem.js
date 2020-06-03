import React from "react";
import Dietary from "./Dietary";
import RemoveButton from "./RemoveButton";
import "../App.css";

function FoodItem(props) {
  const { item, addItemFromSideBar, removeItemFromSideBar, removable } = props;
  const { name, dietaries } = item;
  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={removable ? null : () => addItemFromSideBar(item)}
      className="item"
    >
      <h2>{name}</h2>
      <p>
        {dietaries.map((d) => (
          <Dietary key={d} status={d} />
        ))}
      </p>
      {removable ? (
        <RemoveButton
          item={item}
          removeItemFromSideBar={removeItemFromSideBar}
        />
      ) : null}
    </li>
  );
}

export default FoodItem;
