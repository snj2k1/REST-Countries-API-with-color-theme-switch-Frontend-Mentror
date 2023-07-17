import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import {selectDetailCountry} from '../redux/detail/detail-selector';
import {loadDetail, clearDetail} from '../redux/detail/detail-action';
import { useEffect } from 'react';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetail(name));

    return () => {
      dispatch(clearDetail())
    }
  }, [name, dispatch])
  
  const currentCountry = useSelector(selectDetailCountry);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry.status === 'loading' && <h2>Loading...</h2>}
      {currentCountry.error && <h2>Failed to load...</h2>}
      {currentCountry.currentCountry && <Info push={navigate} {...currentCountry.currentCountry} />}
    </div>
  );
};
