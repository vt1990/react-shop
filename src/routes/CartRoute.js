import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider.js";
import { ProductsContext } from "../providers/ProductsProvider.js";
import ProductsList from "../containers/ProductsList.js";

export default function CartRoute() {
    const { products } = useContext(ProductsContext);
    const { inCart } = useContext(CartContext);
    const inCartProducts = products.filter(product => inCart.has(product.id));
    const totalPrice = inCartProducts.reduce((acc, inCartProduct) => {
        return ( acc.price + inCartProduct.price)
    });

    console.log(typeof (totalPrice))
    // console.log(' product=>',  products)
    return (
        <>
            <div >
                {inCartProducts.length}
            </div>
            <div >
                {totalPrice}
            </div>
            <ProductsList products={inCartProducts}/>
        </>
    );
}