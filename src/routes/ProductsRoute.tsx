import React, { useContext } from "react";
import { ProductsContext } from "../providers/ProductsProvider";
import { ProductsList } from "../containers/ProductsList";


export default function ProductRoute() {
    const { products } = useContext(ProductsContext);

    return <ProductsList products={products} />;
}