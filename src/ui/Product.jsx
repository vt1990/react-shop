import React, { useContext } from "react";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/CartProvider";

export default function Product ({
    id,
    name,
    price,
    origin,
}) {
    const { product, addToCart, deleteFromCart } = useContext(
        CartContext
    );

    console.log(' product=>',  product);
    // const isCartProduct = product.has(id);

    const actions = [
        <Icon
            key="shopping-cart"
            type="shopping-cart"
            // onClick={() =>
            //     isCartProduct ? deleteFromCart(id) : addToCart(id)
            // }
            // theme={isCartProduct ? "filled" : "outlined"}
        />,
        <Link key="shopping-cart" to={`/products/${id}`}>
            <Icon type="link" />
        </Link>,
        <Icon
            key="dollar"
            type="dollar"
        />,
        <div>{price}</div>
    ];

    return (
        <Card
            style={{ width: 400, margin: 20 }}
            title={name}
            actions={actions}
        >
            <Card.Meta
                country={origin}
            />
        </Card>
    );
}
