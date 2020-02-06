import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import cartProductReducer from "./cartproducts/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cartProduct: cartProductReducer
});

export default rootReducer;