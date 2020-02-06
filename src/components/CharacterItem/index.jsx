import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Card, Icon, Button } from "antd";

import "./styles.css";

export default function ProductItem({
  id,
  title,
  price,
  origin,
  selected,
  onClick
}) {
  const productClassNames = classNames("ProductItem", {
    inCart,
    addToCart,
    deleteFromCart,
    productItemSelected: selected
  });

  const isCartProduct = inCart.has(id);

  const actions = [
    <Link to={`/product/${id}`}>
      <Button type="primary" className='preview'>
        preview
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

  return (
      <Card
          key={id}
          id={id}
          style={{ width: 400, margin: 20 }}
          title={title}
          actions={actions}
          className={productClassNames}
      >
        <p>Сountry of manufacture: {origin}</p>
      </Card>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  origin: PropTypes.string,
  selected: PropTypes.bool
};

ProductItem.defaultProps = {
  id: "",
  title: "",
  price: null,
  origin: "",
  selected: false
};
