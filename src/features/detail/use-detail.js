import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetail, loadDetail, selectDetailCountry } from "./detail-slice";

export const useDetail = (name = "") => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetail(name));

    return () => {
      dispatch(clearDetail());
    };
  }, [name, dispatch]);

  const currentCountry = useSelector(selectDetailCountry);

  return [currentCountry];
};
