import React from "react";
import Product from "../ui/Product";

export default function ProductsList({products}) {
    return (
        <div className="content">
            {products.map(({ id, name, price, origin }) => (
                <Product
                    key={id}
                    id={id}
                    title={name}
                    price={price}
                    country={origin}
                />
            ))}
        </div>
    );
}