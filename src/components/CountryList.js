import Country from './Country';

const CountryList = (props) => {
  const { countries, filter } = props;

  let ans = (
    <div className="d-flex justify-content-center align-items-center min-height">
      <div className="spinner" />
    </div>
  );

  if (countries) {
    ans = Object.values(countries).filter(({ name }) => (
      name.toLowerCase().startsWith(filter.toLowerCase())
    )).map((country, index) => (
      <Country country={country} index={index} key={country.id} />
    ));
  }

  return ans;
};

export default CountryList;
