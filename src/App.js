// import React, { useState } from "react";
import React from "react";
import MenuSummary from "./components/MenuSummary";
import MenuPreview from "./components/MenuPreview";
import SideMenu from "./components/SideBar";
import "./App.css";

// function addItemFromSideBar(item) {
//   console.log("*test", item);
// }

// export default () => {
//   // const [menuPreview, setMenuPreview] = useState([]);
//   return (
//     <div className="wrapper">
//       <div className="menu-summary">
//         <div className="container">
//           <MenuSummary />
//         </div>
//       </div>
//       <div className="container menu-builder">
//         <div className="row">
//           <SideMenu addItemFromSideBar={addItemFromSideBar} />
//           <MenuPreview />
//         </div>
//       </div>
//     </div>
//   );
// };
// Can we get this to work with Hooks?

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: [] };
  }

  addItemFromSideBar = (item) => {
    const newMenu = [...this.state.menu, item];
    console.log("*test", item);
    console.log("*state", this.state);
    console.log("*newMenu", newMenu);
    this.setState({ menu: newMenu });
  };

  render() {
    console.log("*state", this.state);
    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <MenuSummary />
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
            <SideMenu addItemFromSideBar={this.addItemFromSideBar} />
            <MenuPreview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
