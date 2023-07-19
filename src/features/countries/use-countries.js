import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../filters/filters-slice";
import {
  loadCountries,
  selectCountries,
  selectCountriesInfo,
} from "./countries-slice";
import { useEffect } from "react";

export const useCountries = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const countries = useSelector((state) => selectCountries(state, filters));
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) dispatch(loadCountries());
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
