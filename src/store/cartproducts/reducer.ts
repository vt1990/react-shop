import { ADD_PRODUCT_SELECT, DELETE_PRODUCT_SELECT } from "./actionTypes";

const initialState = {
    productsToBuy: [],
    productsToCancel: []
};

function addToCartSelected(state, action) {
    const targetProduct = state.find((id: string) => id === action.id);
    if (targetProduct) {
        return state.filter(el => el !== action.id);
    }
    return [...state, action.id];
}

function deleteFromCartSelected(state, action) {
    const targetProduct = state.find((id: string) => id === action.id);
    if (targetProduct) {
        return state.filter(el => el !== action.id);
    }
    return [...state, action.id];
}

export default function checkoutReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_SELECT:
            return {
                ...state,
                productsToBuy: addToCartSelected(state.productsToBuy, action)
            };
        case DELETE_PRODUCT_SELECT:
            return {
                ...state,
                productsToCancel: deleteFromCartSelected(state.productsToCancel, action)
            };
        default:
            return state;
    }
}
