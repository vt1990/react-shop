import React from "react";
import { useParams } from "react-router-dom";
import Product from "../ui/Product";
import { useProducts } from "../hooks/useProducts";

export default function SingleProductRoute() {
    const { productId } = useParams();
    const { product } = useProducts(productId);
    const { id, name, price, origin } =
    product || {};

    return (
        <Product
            id={id}
            title={name}
            price={price}
            origin={origin}
        />
    );
}