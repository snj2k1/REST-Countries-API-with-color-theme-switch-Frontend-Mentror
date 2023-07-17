import {
  SET_DETAIL,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAIL,
} from "./detail-action";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return {
        currentCountry: action.payload,
        status: "recieved",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "rejected",
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case CLEAR_DETAIL:
      return initialState;
    default:
      return state;
  }
};
