import PropTypes from 'prop-types';

const CityInfo = (props) => {
  const { city } = props;
  const {
    name, today_confirmed: confirmed, today_deaths: deaths,
    today_new_confirmed: newConfirmed, today_new_deaths: newDeaths,
    today_new_recovered: recovered,
  } = city;

  return (
    <>
      <p className="fs-1">{name}</p>
      <p className="m-0">{`Confirmed: ${confirmed || 0}`}</p>
      <p className="m-0">{`Deaths: ${deaths || 0}`}</p>
      <p className="m-0">{`New Confirmed: ${newConfirmed || 0}`}</p>
      <p className="m-0">{`New Deaths${newDeaths || 0}`}</p>
      <p className="m-0">{`Recovered: ${recovered || 0}`}</p>
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.shape({
    today_confirmed: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_deaths: PropTypes.number.isRequired,
    today_new_confirmed: PropTypes.number.isRequired,
    today_new_deaths: PropTypes.number.isRequired,
    today_new_recovered: PropTypes.number.isRequired,
  }).isRequired,
};

export default CityInfo;
