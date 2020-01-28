import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { ProductsContext } from "../providers/ProductsProvider";
import ProductsList from "../containers/ProductsList";
import LoadingSpin from "../ui/LoadingSpin";

export default function CartRoute() {
    const { loadingProducts, products } = useContext(ProductsContext);
    const { inCart } = useContext(CartContext);
    const inCartProducts = products.filter(product => inCart.has(product.id));

    if (loadingProducts) return <LoadingSpin />;

    return <ProductsList products={inCartProducts} />;
}