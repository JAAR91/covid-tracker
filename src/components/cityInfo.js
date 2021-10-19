import PropTypes from 'prop-types';
import { useState } from 'react';

const CityInfo = (props) => {
  const [hide, setHide] = useState(true);
  const { city } = props;
  const {
    name, today_confirmed: confirmed, today_new_confirmed: newConfirmed,
    today_new_deaths: newDeaths, today_new_recovered: recovered,
  } = city;

  const hideInfo = () => {
    setHide(!hide);
  };

  return (
    <>
      <button
        type="button"
        className="d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-white"
        onClick={hideInfo}
      >
        <p className="fs-4 m-0">{name}</p>
        <p className="m-0">{`Confirmed: ${confirmed || 0}`}</p>
      </button>
      <div
        className={`d-flex justify-content-around align-items-between ${hide ? 'd-none' : ''}`}
      >
        <p className="m-0">{`New Confirmed: ${newConfirmed || 0}`}</p>
        <p className="m-0">{`New Deaths: ${newDeaths || 0}`}</p>
        <p className="m-0">{`Recovered: ${recovered || 0}`}</p>
      </div>
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.shape({
    today_confirmed: PropTypes.number,
    name: PropTypes.string.isRequired,
    today_new_confirmed: PropTypes.number,
    today_new_deaths: PropTypes.number,
    today_new_recovered: PropTypes.number,
  }).isRequired,
};

export default CityInfo;
