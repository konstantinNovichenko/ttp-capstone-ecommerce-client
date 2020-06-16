import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllItemsContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/items" component={AllItemsContainer} />
    </Switch>
  );
};

export default RoutesView;
