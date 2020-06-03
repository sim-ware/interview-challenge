import React from "react";
import "../App.css";

function MenuSummary(props) {
  return (
    <div className="row">
      <div className="col-6 menu-summary-left">
        <span>{props.itemCount} items</span>
      </div>
      <div className="col-6 menu-summary-right">
        2x <span className="dietary">ve</span>
        {/* SORT OUT ve FIRST THEN REPEAT LOGIC FOR THE REST */}
        {/* 4x <span className="dietary">v</span>
        5x <span className="dietary">gf</span>
        6x <span className="dietary">df</span>
        4x <span className="dietary">rsf</span>
        2x <span className="dietary">n!</span> */}
      </div>
    </div>
  );
}

export default MenuSummary;
