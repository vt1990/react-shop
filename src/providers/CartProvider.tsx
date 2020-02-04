import React, { useState, useCallback } from "react";

// interface iChildren {
//     productId: string
// }

export const CartContext = React.createContext(new Set());

export default function CartProvider({ children }) {
    const [inCart, setCart] = useState(new Set());

    const addToCart = useCallback(
        id => {
            const nextInCart = new Set(inCart);
            nextInCart.add(id);
            setCart(nextInCart);
        },
        [inCart]
    );

    const deleteFromCart = useCallback(
        id => {
            const nextInCart = new Set(inCart);
            nextInCart.delete(id);
            setCart(nextInCart);
        },
        [inCart]
    );

    return (
        <CartContext.Provider
            value={{
                inCart,
                addToCart,
                deleteFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
