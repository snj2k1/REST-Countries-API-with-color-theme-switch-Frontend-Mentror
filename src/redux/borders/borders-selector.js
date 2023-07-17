export const selectBorders = (state) => ({
  status: state.borders.status,
  error: state.borders.error,
  borders: state.borders.borders,
});
