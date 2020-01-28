import React, { useState, useEffect } from "react";

export const ProductsContext = React.createContext({
    products: [],
    loadingProducts: false
});

export default function ProductsProvider({ children }) {
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoadingProducts(true);

        fetch(
            `https://yalantis-react-school.herokuapp.com/api/v1/products`
        )
            .then(res => res.json())
            .then(json => {
                setProducts(json.results);
                setLoadingProducts(false);
            });
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                loadingProducts,
                products
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}