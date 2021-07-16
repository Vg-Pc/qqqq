import React from "react";
import PropTypes from "prop-types";
import Header from "./components/header";
import "./App.css";
import MenuLeft from "./components/menu";
import AppNavigator from "./navigation";

function App() {
  return (
    <div>
      <Header />
      <AppNavigator />
    </div>
  );
}

module.exports = function () {
  return function (req, res, next) {
    // getAlias would get an object {alias:"alias/path",source:"/real/path"} or null
    const [alias, getAlias] = req.url;
    if (alias) {
      req.url = alias.source;
    }
    next();
  };
};
export default App;
