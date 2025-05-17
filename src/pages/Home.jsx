import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi.js';
import CountryList from '../components/CountryList/CountryList.jsx';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    const getHomeCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getHomeCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error ? (
          <p>There is an error</p>
        ) : (
          <>
            {isLoading && <p>Loading, please, wait...</p>}
            <CountryList countries={countries} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default Home;
