import { SET_REGION, SET_SEARCH, CLEAR_FILTER } from "./filters-action";

const initialState = {
  search: "",
  region: "",
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CLEAR_FILTER:
      return {
        search: "",
        region: "",
      };
    default:
      return state;
  }
};
