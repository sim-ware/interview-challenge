import React from "react";
import "../App.css";

function MenuSummary(props) {
  const {
    vCount,
    veCount,
    dfCount,
    gfCount,
    rsfCount,
    nCount,
  } = props.dietaryCount;

  return (
    <div className="row">
      <div className="col-6 menu-summary-left">
        <span>{props.itemCount} items</span>
      </div>
      <div className="col-6 menu-summary-right">
        {vCount}x <span className="dietary">v</span>
        {veCount}x <span className="dietary">ve</span>
        {dfCount}x <span className="dietary">df</span>
        {gfCount}x <span className="dietary">gf</span>
        {rsfCount}x <span className="dietary">rsf</span>
        {nCount}x <span className="dietary">n!</span>
      </div>
    </div>
  );
}

export default MenuSummary;
