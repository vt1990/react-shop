import { createSelector } from "reselect";

export const selectProduct = state => state.product;
export const selectProductToCart = state => state.cartproduct;

export const selectProductsToBuy = createSelector(
    selectProductToCart,
    state => state.productsToCart
);

export const selectProductEntities = createSelector(
    selectProduct,
    state => state.byId
);
export const selectProductsIds = createSelector(
    selectProduct,
    state => state.allIds
);

export const selectProductsList = createSelector(
    [selectProductEntities, selectProductsIds],
    (products, allIds = []) => allIds.map(id => products[id])
);

export const makeSelectproductById = (id: string) =>
    createSelector(selectProductEntities, byId => byId[id]);



export const makeSelectIsProductPicked = (id: string) =>
    createSelector(
        selectProductsToBuy,
        productIds => !!toyIds.find(productId => productId === id)
    );
