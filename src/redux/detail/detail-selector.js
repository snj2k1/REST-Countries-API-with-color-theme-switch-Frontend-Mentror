export const selectDetailCountry = (state) => ({
  status: state.detail.status,
  error: state.detail.error,
  currentCountry: state.detail.currentCountry,
});
