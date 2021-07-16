import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Explore from "../screens/explore";
import History from "../screens/history";
import Home from "../screens/home";
import Library from "../screens/library";
import Subscriptions from "../screens/subscriptions";

function Nav() {
  return (
    <Switch>
      <Route path="/main/home" component={Home} />
      <Route path="/main/explore" component={Explore} />
      <Route path="/main/history" component={History} />
      <Route path="/main/library" component={Library} />
      <Route path="/main/subscriptions" component={Subscriptions} />
    </Switch>
  );
}

export default Nav;
