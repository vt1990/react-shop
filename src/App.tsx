import React from "react";
import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link
} from "react-router-dom";
import ProductsProvider from "./providers/ProductsProvider";
import SingleProductRoute from "./routes/SingleProductRoute";
import CartRoute from "./routes/CartRoute";
import ProductsRoute from "./routes/ProductsRoute";
import AppHeader from "./ui/AppHeader";
import ProductsReducer from './containers/Products'

import "./App.css";
import {Button} from "antd";

const rooReducer = combineReducers({
  ProductsReducer
});
const store = createStore(rooReducer);


export default function App() {
  return (
      <Provider store={store}>
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
      </Provider>
  );
}

