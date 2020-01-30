import React, { useState, useEffect } from "react";
import serviceXHR from '../helpers/ServiceXHR.js';
import config from '../config.json';

export const ProductsContext = React.createContext({
    products: [],
});

export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await serviceXHR('get', `${config.url.base}${config.url.products}`);
            setProducts(data.items);
        })();

    },[]);

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