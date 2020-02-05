import {ADD_PRODUCT_SELECT, DELETE_PRODUCT_SELECT} from "./actionTypes";

export function addToCartSelected(id: string) {
    return {
        type: ADD_PRODUCT_SELECT,
        id
    };
}

export function deleteFromCartSelected(id: string) {
    return {
        type: DELETE_PRODUCT_SELECT,
        id
    };
}

