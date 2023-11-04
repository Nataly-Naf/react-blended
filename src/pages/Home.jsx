import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchByRegion()
      .then(res => setCountries(res))
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading>{error.message}</Heading>}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
