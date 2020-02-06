import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

export const initialState = {
  byId: {},
  allIds: [],
  selectedIds: []
};

function saveProducts(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds]
  };
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return saveProducts(state, action);
    default:
      return state;
  }
}
