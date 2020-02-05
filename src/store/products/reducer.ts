import produce from "immer";

export interface iProduct {
    id: string;
    name: string;
    price: number;
    origin: string;
    createdAt: string;
    updatedAt: string;
    isEditable: boolean;
}

interface iProducts {
    items: iProduct[];
    totalItems: number;
    page: number;
    perPage: number;
}

// const productIdReducer = produce((draft, action) => {
//     switch (action.type) {
//         case GET_PRODUCTS_SUCCESS:
//             action.products.filter(product => {
//                 draft[product.id] = product
//             })
//     }
// });

function productsReducer(state :iProducts | [] = [], action: {[index: string]:any}) {
    switch (action.type) {
        case '':
            return {...state, filtredArray: state.filter(el => action.payload === el.origin)};
        default:
            return {...state}
    }
}

export default productsReducer;