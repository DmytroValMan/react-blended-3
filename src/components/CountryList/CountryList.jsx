import { Link, useLocation } from 'react-router-dom';

import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import css from './CountryList.module.css';

const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`} state={location}>
              <img src={country.flag} alt={country.name} />
            </Link>
            <p className={css.name}>{country.country}</p>
          </GridItem>
        );
      })}
    </Grid>
  );
};
export default CountryList;
