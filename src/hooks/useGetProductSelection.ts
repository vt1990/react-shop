import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectIsProductPicked } from "../store/selectors";

export default function useGetProductSelection(id: string) {
    const isProductsPickedSelector = useMemo(() => makeSelectIsProductPicked(id), [
        id
    ]);
    return useSelector(isProductsPickedSelector);
}