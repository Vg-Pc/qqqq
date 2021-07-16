import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/header";
import MenuLeft from "../components/menu";
import Explore from "../screens/explore";
import Home from "../screens/home";
import Nav from "./nav";

function AppNavigator() {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main/home" />
          <Route path="/main" component={MainNavigator} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppNavigator;

const MainNavigator = () => (
  <>
    <div
      style={{
        display: "flex",
        flexFlow: "nowrap",
        justifyContent: "space-around",
      }}
    >
      <MenuLeft />
      <Nav />
    </div>
  </>
);
