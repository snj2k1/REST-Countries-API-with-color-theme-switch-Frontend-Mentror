import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import {selectCountries, selectCountriesInfo} from '../redux/countries/countries-selector';
import {selectFilters} from '../redux/filters/filter-selector'
import {loadCountries} from '../redux/countries/countries-action'
import { useEffect } from 'react';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const countries = useSelector((state) => selectCountries(state, filters));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if(!qty) dispatch(loadCountries());
  }, [qty, dispatch])

  return (
    <>
      <Controls />

      {error && <h2>Failed to load...</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'recieved' && 
      <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>}
    </>
  );
};
