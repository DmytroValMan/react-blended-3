import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import { fetchByRegion } from '../../service/countryApi';
import CountryList from '../../components/CountryList/CountryList';
import styles from './SearchCountry.module.css';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [region, setRegion] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  useEffect(() => {
    if (!region) return;
    setError(false);
    setIsLoading(true);
    const getCountriesByRegion = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCountriesByRegion();
  }, [region]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchField = evt.currentTarget.elements.region.value.trim();
    if (searchField !== 'default') {
      const lastSearchParams = new URLSearchParams(searchParams);
      lastSearchParams.set('region', searchField);
      setSearchParams(lastSearchParams);
    }
  };

  return (
    <Section>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button className={styles.button} type="submit">
            <FiSearch size="16px" />
          </button>
          <select
            aria-label="select"
            className={styles.select}
            name="region"
            required
            defaultValue="default"
          >
            <option disabled value="default">
              Select a region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
