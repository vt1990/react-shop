import React, { FC } from "react";
import Product from "../ui/Product";

import './ProductList.css';

interface iProducts {
    id: string,
    name: string,
    price: number,
    origin: string
}

interface iProps {
    products: iProducts[]
}

export const ProductsList: React.FC<iProps> = ({products})  => {
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
};