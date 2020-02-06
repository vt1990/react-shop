import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/products";
import { getProductsSuccess } from "../store/products/actions";
import { normalize } from "../utils/normalize";
import { selectCharactersList } from "../store/selectors";

function useGetProductsData() {
  const dispatch = useDispatch();
  const products = useSelector(selectCharactersList);

  useEffect(() => {
    if (!products.length) {
      getProducts()
        .then(data => {
          const dataToSave = normalize(data);
          dispatch(getProductsSuccess(dataToSave));
        })
        .catch(error => {
          console.log("Error obtaining products:", error);
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
