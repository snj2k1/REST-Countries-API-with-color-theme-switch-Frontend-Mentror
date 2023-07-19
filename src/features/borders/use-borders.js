import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBorders, loadBorders, selectBorders } from "./borders-slice";

export const useBorders = (borders) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBorders(borders));

    return () => {
      dispatch(clearBorders());
    };
  }, [borders, dispatch]);

  const currentBorders = useSelector(selectBorders).borders;

  return [currentBorders];
};
