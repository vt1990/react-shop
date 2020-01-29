import React, { useState, useEffect } from "react";
import ServiceXHR from '../helpers/ServiceXHR';

export const ProductsContext = React.createContext({
    products: [{}],
});

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ServiceXHR(
                '/products',
            );

            setProducts(result.products);
        };

        fetchData();
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}