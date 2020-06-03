import React from "react";
import "../App.css";

function MenuSummary() {
  return (
    <div className="row">
      <div className="col-6 menu-summary-left">
        <span>5 items</span>
      </div>
      <div className="col-6 menu-summary-right">
        6x <span className="dietary">ve</span>
        4x <span className="dietary">v</span>
        12x <span className="dietary">n!</span>
      </div>
    </div>
  );
}

export default MenuSummary;
