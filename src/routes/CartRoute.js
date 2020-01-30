import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider.js";
import { ProductsContext } from "../providers/ProductsProvider.js";
import ProductsList from "../containers/ProductsList.js";

export default function CartRoute() {
    const { products } = useContext(ProductsContext);
    const { inCart } = useContext(CartContext);
    const inCartProducts = products.filter(product => inCart.has(product.id));
    const totalPrice = inCartProducts.map(productPrice => productPrice.price).reduce((acc, inCartProduct) => {
        return ( acc + inCartProduct)
    }, 0);

    const groupProducts = inCartProducts.reduce((grouped, obj) => {
        if (!grouped[obj.origin]) grouped[obj.origin] = [];
        grouped[obj.origin].push(obj);
        return grouped;
    }, {});

    return (
        <>
            <div>
                Products quantity: {inCartProducts.length}
            </div>
            <div>
                Total price: {totalPrice}
            </div>
            <ProductsList products={inCartProducts || []}/>
        </>
    );
}