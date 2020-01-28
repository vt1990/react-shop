import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider";
import CartProvider from "./providers/CartProvider";
// import SingleProductRoute from "./routes/SingleProductRoute";
import CartRoute from "./routes/CartRoute";
import ProductsRoute from "./routes/ProductsRoute";
import AppHeader from "./ui/AppHeader";

import "./App.css";

export default function App() {
    return (
        <ProductsProvider>
            <CartProvider>
                <Router>
                    <AppHeader/>
                    <div className="app">
                        <Switch>
                            <Route path="/products">
                                <ProductsRoute/>
                            </Route>
                            {/*<Route path="/products/:productId">*/}
                            {/*    <SingleProductRoute/>*/}
                            {/*</Route>*/}
                            <Route path="/cart">
                                <CartRoute/>
                            </Route>
                            <Route path="*">
                                <Redirect to="/products"/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        </ProductsProvider>
    );
}

