import {
  SET_BORDERS,
  SET_LOADING,
  SET_ERROR,
  CLEAR_BORDERS,
} from "./borders-action";

const initialState = {
  status: "idle",
  error: null,
  borders: [],
};

export const bordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDERS:
      return {
        status: "recieved",
        error: null,
        borders: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: "loading",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "rejected",
      };
    case CLEAR_BORDERS:
      return initialState;
    default:
      return state;
  }
};
