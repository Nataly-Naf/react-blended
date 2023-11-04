import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';
import { useEffect, useState } from 'react';

export const Country = () => {
  const { id } = useParams();
  console.log(id);
  const [country, setCountry] = useState(null);
  console.log(country);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(id)
      .then(response => setCountry(response))
      .catch(err => {
        setError(err);
      })
      .finally(setIsLoading(false));
  }, [id]);

  return (
    <Section>
      <Container>
        {error && <Heading>{error.message}</Heading>}
        {isLoading && <Loader />}
        {country && <CountryInfo {...country}></CountryInfo>}
      </Container>
    </Section>
  );
};
