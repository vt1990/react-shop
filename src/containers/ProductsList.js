import React from "react";
import Product from "../ui/Product";

export default function ProductsList({products}) {
    return (
        <div className="content">
            {products.map(({ id, name, description, date, price }) => (
                <Product
                    key={id}
                    id={id}
                    title={name}
                    overview={description}
                    date={date}
                    price={price}
                />
            ))}
        </div>
    );
}