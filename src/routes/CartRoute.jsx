import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider.jsx";
import { ProductsContext } from "../providers/ProductsProvider.jsx";
import ProductsList from "../containers/ProductsList.jsx";

export default function CartRoute() {
    const { products } = useContext(ProductsContext);
    const { inCart } = useContext(CartContext);
    const inCartProducts = products.filter(product => inCart.has(product.id));

    return <ProductsList products={inCartProducts} />;
}