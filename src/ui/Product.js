import React, { useContext } from "react";
import { Card, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/CartProvider.js";

export default function Product ({
    id,
    title,
    price,
    origin,
}) {
    const { inCart, addToCart, deleteFromCart } = useContext(CartContext);
    const isCartProduct = inCart.has(id);

    const actions = [
        <Link to={`/products/${id}`}>
            <Button type="primary">
                preview
                <Icon type="right" />
            </Button>
        </Link>,
        <Icon
            key="delete"
            type="delete"
            onClick={() =>
                isCartProduct ? deleteFromCart(id) : addToCart(id)
            }
            theme={isCartProduct ? "filled" : "outlined"}
        />,
        <Icon
            key="dollar"
            type="dollar"
        />,
        <div>{price}</div>
    ];

    // console.log(' addToCart=>',  addToCart());
    return (
        <Card
            key={id}
            id={id}
            style={{ width: 400, margin: 20 }}
            title={title}
            actions={actions}
        >
            <p>Сountry of manufacture: {origin.toUpperCase()}</p>
        </Card>
    );
}
