export const SET_SEARCH = "SET_SEARCH";
export const SET_REGION = "SET_REGION";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const setSearch = (data) => ({
  type: SET_SEARCH,
  payload: data,
});

export const setRegion = (data) => ({
  type: SET_REGION,
  payload: data,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
