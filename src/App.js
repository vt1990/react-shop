import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, Link
} from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider";
import CartProvider from "./providers/CartProvider";
import SingleProductRoute from "./routes/SingleProductRoute";
import CartRoute from "./routes/CartRoute";
import ProductsRoute from "./routes/ProductsRoute";
import AppHeader from "./ui/AppHeader";

import "./App.css";
import {Button} from "antd";

export default function App() {
    return (
        <ProductsProvider>
            <CartProvider>
                <Router>
                    <div className="app">
                        <Switch>
                            <Route path="/products">
                                <AppHeader/>
                                <ProductsRoute/>
                            </Route>
                            <Route path="/product/:productId" >
                                <AppHeader/>
                                <SingleProductRoute/>
                            </Route>
                            <Route path="/cart">
                                <div className='cart-wrapper'>
                                    <Link to="/products">
                                        <Button type="default">Products Page</Button>
                                    </Link>
                                    <CartRoute/>
                                </div>
                            </Route>
                            <Route path="*">
                                <AppHeader/>
                                <Redirect to="/products"/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        </ProductsProvider>
    );
}

