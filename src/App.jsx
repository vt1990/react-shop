import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Characters from "./pages/Сharacters";
import { routes } from "./constants/routes";
import CharacterProfile from "./pages/Сharacters/CharacterProfile";
import NavBarContainer from "./containers/NavBarContainer";
import useGetProductsData from "./hooks/useGetProductsData";

function App() {
  const { products } = useGetProductsData();
  return (
    <Fragment>
      <NavBarContainer />
      <Switch>
        <Redirect exact from="/" to={routes.products.index} />
        <Route
          path={routes.products.index}
          exact
          render={() => <Characters products={products} />}
        />
        <Route
          path={routes.products.characterProfile}
          exact
          component={CharacterProfile}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
