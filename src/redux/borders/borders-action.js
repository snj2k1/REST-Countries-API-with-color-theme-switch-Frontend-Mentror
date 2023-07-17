export const SET_LOADING = "@@borders/SET_LOADING";
export const SET_ERROR = "@@borders/SET_ERROR";
export const SET_BORDERS = "@@borders/SET_BORDER";
export const CLEAR_BORDERS = "@@borders/CLEAR_BORDER";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

const setBorders = (data) => ({
  type: SET_BORDERS,
  payload: data,
});

export const clearBorders = () => ({
  type: CLEAR_BORDERS,
});

export const loadBorders =
  (borders) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.filterByCode(borders))
      .then(({ data }) => dispatch(setBorders(data)))
      .catch((err) => dispatch(setError(err.message)));
  };
