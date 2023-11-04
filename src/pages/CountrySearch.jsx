import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = value => {
    setRegion(value);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchByRegion(region)
      .then(setCountries)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [region]);
  return (
    <Section>
      <Container>
        {' '}
        {error && <Heading>{error.message}</Heading>}
        {isLoading && <Loader />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
