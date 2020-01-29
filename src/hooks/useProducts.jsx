import { useState, useEffect } from "react";
import ServiceXHR from "../helpers/ServiceXHR";

export const useProducts = productId => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ServiceXHR(
                `/products/${productId}`,
            );

            setProducts(result.products);
        };

        fetchData();
    }, [productId]);

    return {
        products
    };
};