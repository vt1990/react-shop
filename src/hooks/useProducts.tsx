import { useState, useEffect } from "react";
import ServiceXHR from "../helpers/ServiceXHR";
import config from "../config";

export const useProducts = productId => {
    const [products, setProducts] = useState(null);
    const url = `${config.url.base}${config.url.products}/${productId}`;

    useEffect(() => {
        ( async () => {
            const {data} =  await ServiceXHR('get', url);

            setProducts(data);
        })();
    },[]);

    return {
        products
    };
};