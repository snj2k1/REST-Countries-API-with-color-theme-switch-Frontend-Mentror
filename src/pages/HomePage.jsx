import { Controls } from '../features/filters/Controls';
import { CountriesList } from '../features/countries/CountriesList';

export const HomePage = () => {
  return (
    <>
      <Controls />
      <CountriesList/>
    </>
  );
};
