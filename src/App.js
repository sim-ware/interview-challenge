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

  render() {
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
