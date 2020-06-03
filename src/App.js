import React from "react";
import MenuSummary from "./components/MenuSummary";
import MenuPreview from "./components/MenuPreview";
import SideMenu from "./components/SideBar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: [] };
  }

  addItemFromSideBar = (item) => {
    const newMenu = [...this.state.menu, item];
    this.setState({ menu: newMenu });
  };

  removeItemFromSideBar = (item) => {
    const newMenu = this.state.menu.filter((dish) => dish !== item);
    this.setState({ menu: newMenu });
  };

  returnDietaryCounts = () => {
    const { menu } = this.state;
    let vCount = 0;
    let veCount = 0;
    let gfCount = 0;
    let dfCount = 0;
    let rsfCount = 0;
    let nCount = 0;
    menu.forEach((item) => {
      item.dietaries.forEach((dietary) => {
        dietary === "v" ? vCount++ : null;
        dietary === "ve" ? veCount++ : null;
        dietary === "gf" ? gfCount++ : null;
        dietary === "df" ? dfCount++ : null;
        dietary === "rsf" ? rsfCount++ : null;
        dietary === "n!" ? nCount++ : null;
      });
    });
    console.log("*vCount", vCount);
    console.log("*veCount", veCount);
    console.log("*gfCount", gfCount);
    console.log("*dfCount", dfCount);
    console.log("*rsfCount", rsfCount);
    console.log("*nCount", nCount);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <MenuSummary
              itemCount={this.state.menu.length}
              dietaryCount={this.returnDietaryCounts()}
            />
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
            <SideMenu addItemFromSideBar={this.addItemFromSideBar} />
            <MenuPreview
              removeItemFromSideBar={this.removeItemFromSideBar}
              menu={this.state.menu}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
