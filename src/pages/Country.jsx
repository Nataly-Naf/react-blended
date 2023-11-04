import { Section, Container, CountryInfo, Loader } from 'components';
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
    // console.log('dddfdf');
    fetchCountry(id)
      .then(response => setCountry(response))
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <Section>
      <Container>
        {country && <CountryInfo {...country}></CountryInfo>}
      </Container>
    </Section>
  );
};
