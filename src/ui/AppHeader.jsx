import React from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <PageHeader
            className="page-header"
            title="Online-shop"
            subTitle="Yalantis ReactJs School"
            extra={[
                <Link key="cart" to="/cart">
                    <Button type="primary">Cart</Button>
                </Link>
            ]}
        />
    );
}