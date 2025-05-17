import Container from '../../components/Container/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Section from '../../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../../service/countryApi';
import { useParams } from 'react-router-dom';

import css from './Country.module.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    const getCountryById = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCountryById();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <div className={css.wrapper}>
          <h2>{country.countryName}</h2>
          <img src={country.flag} alt={country.id} width="300"></img>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population?.toLocaleString('uk-UA')}</p>
          <p>Languages: {country.languages?.join(', ')}</p>
        </div>
      </Container>
    </Section>
  );
};

export default Country;
