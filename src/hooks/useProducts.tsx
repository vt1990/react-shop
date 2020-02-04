import {useState, useEffect} from "react";
import ServiceXHR from "../helpers/ServiceXHR";
import config from "../config.json";

interface iProductId {
    productId: any
}

export const useProducts = (productId:any) => {
    const [products, setProducts] = useState(null);
    const url = `${config.url.base}${config.url.products}/${productId}`;

    useEffect(() => {
        ( async () => {
            const {data} =  await ServiceXHR('get', url, {});
console.log('data',data)
            setProducts(data);
        })();
    },[]);

    return {
        products
    };
};
