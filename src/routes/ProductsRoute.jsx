import React from "react";
import { useParams } from "react-router-dom";
import Product from "../ui/Product";
import { useProducts } from "../hooks/useProducts";

export default function ProductRoute() {
    const { productId } = useParams();
    const { product } = useProducts(productId);
    const { id, name, price, origin} =
    product || {};

    return (
        <Product
            id={id}
            name={name}
            price={price}
            country={origin}
        />
    );
}