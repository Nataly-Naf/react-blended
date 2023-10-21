import { Dna } from 'react-loader-spinner';

const DnaSpiner = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ margin: '0 auto', display: 'block' }}
      wrapperClass="dna-wrapper"
    />
  );
};

export { DnaSpiner };
