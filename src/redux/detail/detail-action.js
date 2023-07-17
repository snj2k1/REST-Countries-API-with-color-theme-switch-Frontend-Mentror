export const SET_LOADING = "@@detail/SET_LOADING";
export const SET_ERROR = "@@detail/SET_ERROR";
export const SET_DETAIL = "@@detail/SET_DETAIL";
export const CLEAR_DETAIL = "@@detail/CLEAR_DETAIL";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

const setDetail = (data) => ({
  type: SET_DETAIL,
  payload: data,
});

export const clearDetail = () => ({
  type: CLEAR_DETAIL,
});

export const loadDetail =
  (country) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(country))
      .then(({ data }) => dispatch(setDetail(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };
