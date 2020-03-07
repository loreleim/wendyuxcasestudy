import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import NavOverlay from "./components/nav-overlay";
import Home from "./pages/home/index.js";
import Planning from "./pages/planning/index.js";
import Production from "./pages/production/index.js";
import UserTesting from "./pages/user-testing/index.js";
import Launch from "./pages/launch/index.js";
import CircleNav from "./components/circle-nav/index.js";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  componentDidMount() {
    console.log(
      "this is the loaded state of the overlay: " + this.state.sideDrawerOpen
    );
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <NavOverlay></NavOverlay>;
    }

    console.log(this.state.sideDrawerOpen);
    return (
      <div>
        <Router basename="/wendygoeshiking">
    drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };

    render() {
      let backdrop;
      const { location } = this.props;
      console.log(location);
      if (this.state.sideDrawerOpen) {
        backdrop = <NavOverlay></NavOverlay>;
      }
      console.log("the state of the overlay is: " + this.state.sideDrawerOpen);
      return (
        <div>
          <CircleNav
            drawerClickHandler={this.drawerToggleClickHandler}
          ></CircleNav>
          {backdrop}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/planning" component={Planning}></Route>
            <Route path="/production" component={Production}></Route>
            <Route path="/usertesting" component={UserTesting}></Route>
            <Route path="/launch" component={Launch}></Route>
          </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/wendygoeshiking">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;
