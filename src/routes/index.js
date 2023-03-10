import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Page/home/index";
import Sobre from "../Page/sobre/index";
import Contexto from "../Page/contexto/index";
const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/contexto" component={Contexto} />
      </Switch>
    </BrowserRouter>
  );
};
export default routes;
