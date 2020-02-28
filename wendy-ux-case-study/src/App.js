import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/index.js";
import Home from "./pages/home/index.js";
import Planning from "./pages/planning/index.js";
import Production from "./pages/production/index.js";
import UserTesting from "./pages/user-testing/index.js";
import Launch from "./pages/launch/index.js";

function App() {
  return (
    <div>
      <Router basename="/wendygoeshiking">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/planning" component={Planning}></Route>
          <Route path="/production" component={Production}></Route>
          <Route path="/usertesting" component={UserTesting}></Route>
          <Route path="/launch" component={Launch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
