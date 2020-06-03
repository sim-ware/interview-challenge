import React from "react";
import "../App.css";

function RemoveButton(props) {
  const { removeItemFromSideBar, item } = props;
  return (
    <button onClick={() => removeItemFromSideBar(item)} className="remove-item">
      x
    </button>
  );
}

export default RemoveButton;
