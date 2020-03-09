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

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHit: true,
        butthole: 0,
        potato: "hidden",
        rice: "0%"
      };
    }

    componentDidUpdate(prevLocation) {
      if (this.props.location !== prevLocation.location) {
        this.onRouteChanged();
      }
    }

    onRouteChanged() {
      console.log("the route has been changed");
      this.setState(prevState => ({
        isHit: !prevState.isHit
      }));
      this.setState({ butthole: 0 });
      this.setState({ potato: "hidden" });
      this.setState({ rice: "0%" });
    }

    toggleOverlay = () => {
      const isHit = this.state.isHit;
      this.setState(prevState => ({
        isHit: !prevState.isHit
      }));
      if (isHit) {
        this.setState({ butthole: 1 });
        this.setState({ potato: "visible" });
        this.setState({ rice: "85vh" });
      } else {
        this.setState({ butthole: 0 });
        this.setState({ potato: "hidden" });
        this.setState({ rice: "0%" });
      }
    };

    render() {
      return (
        <div>
          <CircleNav drawerClickHandler={this.toggleOverlay}></CircleNav>
          <NavOverlay
            opacity={this.state.butthole}
            visibility={this.state.potato}
            height={this.state.rice}
          ></NavOverlay>
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
