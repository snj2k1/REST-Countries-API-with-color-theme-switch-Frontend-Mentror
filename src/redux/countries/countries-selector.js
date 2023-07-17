export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectCountries = (
  state,
  filters = { search: "", region: "" }
) => {
  return state.countries.list.filter(
    (pos) =>
      pos.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      pos.region.includes(filters.region)
  );
};
