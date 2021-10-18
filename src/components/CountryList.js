import Country from './Country';
import Loading from './Loading';

const CountryList = (props) => {
  const { countries, filter } = props;

  let ans = (<Loading />);

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
