import React, { useState, useEffect } from "react";
import serviceXHR from '../helpers/ServiceXHR';
import config from '../config.json';

export const ProductsContext = React.createContext({
    products: [],
});

// @ts-ignore
export default function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            // @ts-ignore
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
