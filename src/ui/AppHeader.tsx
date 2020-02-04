import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
// import { totalPrice } from "../providers/ProductsData";
export default function AppHeader() {
    return (
        <PageHeader
            className="page-header"
            title="Online-shop"
            subTitle="Yalantis ReactJs School"
            extra={[
                <Link key="products" to="/products">
                    <Button type="default">Products Page</Button>
                </Link>,
                <Link key="cart" to="/cart">
                    <Button type="primary">Cart</Button>
                </Link>,
                <Button type="danger">Total price: {78}</Button>
            ]}
        />
    );
}
