import { useEffect, useMemo  } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceXHR from "../helpers/ServiceXHR";
import config from "../config.json";
import { getProductsSuccess } from "../store/products/actions";
import { normalize } from "../helpers/normalize";
import { selectProductsList } from "../store/selectors";

interface iProductId {
    productId: string
}

function useGetProductsData() {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsList);
    const url = `${config.url.base}${config.url.products}/${productId}`;

    useEffect(() => {
        if (!products.length) {
            ServiceXHR('get', url, {})
                .then(data => {
                    const dataToSave = normalize(data);
                    dispatch(getProductsSuccess(dataToSave));
                })
                .catch(error => {
                    console.log("Error obtaining characters:", error);
                });
        }
    }, [dispatch, products]);
    return useMemo(
        () => ({
            products
        }),
        [products]
    );
}

export default useGetProductsData;

// export const useProducts = (productId:any) => {
//     const [products, setProducts] = useState(null);
//     const url = `${config.url.base}${config.url.products}/${productId}`;
//
//     useEffect(() => {
//         ( async () => {
//             const {data} =  await ServiceXHR('get', url, {});
//
//             setProducts(data);
//         })();
//     },[]);
//
//     return {
//         products
//     };
// };
