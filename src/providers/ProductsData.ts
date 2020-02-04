import {useContext} from "react";
import {ProductsContext} from "./ProductsProvider";
import {CartContext} from "./CartProvider";

const { products } = useContext(ProductsContext);
const { inCart } = useContext(CartContext);
export const inCartProducts = products.filter(product => inCart.has(product.id));
export const totalPrice = inCartProducts.map(productPrice => productPrice.price).reduce((acc, inCartProduct) => {
    return ( acc + inCartProduct)
}, 0);

