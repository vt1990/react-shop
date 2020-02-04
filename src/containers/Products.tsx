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

function productsReducer(state :iProducts | [] = [], action: {[index: string]:any}) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, filtredArray: state.filter(el => action.payload === el.origin)};
        default:
            return {...state}
    }
}

export default productsReducer;
