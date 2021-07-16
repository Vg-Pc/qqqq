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

export default App;
