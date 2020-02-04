import React from "react";
import Product from "../ui/Product.js";

import './ProductList.css';

export default function ProductsList({products}) {
    return (
        <div className="content">
            {products && products.map(({ id, name, price, origin }) => (
                <Product
                    key={id}
                    id={id}
                    title={name}
                    price={price}
                    origin={origin}
                />
            ))}
        </div>
    );
}