import { useState, useEffect } from "react";

export const useProducts = productsList => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(
            `https://yalantis-react-school.herokuapp.com/api/v1/products`
        )
            .then(res => res.json())
            .then(products => {
                setProducts(products);
            });
    }, [productsList]);

    return {
        products
    };
};