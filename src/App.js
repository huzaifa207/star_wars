import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import Error from "./screens/Error";

import "./App.css";

let App = () => {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>

        <Route
          path="/details/:category/:id"
          children={<ItemDetailScreen />}
        ></Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
