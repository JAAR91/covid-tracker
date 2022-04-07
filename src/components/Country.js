import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import ReactCountryFlag from 'react-country-flag';
import countryCode from '../countryName';
import noFlag from '../img/no_flag.png';

const Country = (props) => {
  const { country, index } = props;

  return (
    <Link
      to={`/country/${country.id}`}
      className={`
      col-6 no-underline m-0 text-white
      ${([1, 0, 0, 1][index % 4]) === 0 ? 'intense-magenta' : 'light-magenta'}
    `}
    >
      <div
        className="d-flex flex-row justify-content-between m-0 p-0 text-decoration-none align-items-center"
      >
        {countryCode[country.name]
          ? (
            <ReactCountryFlag
              countryCode={countryCode[country.name]}
              svg
              style={{
                width: '4em',
                height: '4em',
              }}
            />
          )
          : (
            <img alt="" src={noFlag} style={{ width: '4rem', height: '4rem' }} />
          )}
        <div className="text-end m-0 p-0">
          <BsArrowRightCircle />
          <h5 className="m-0 text-end fw-bold fs-6 text-wrap mt-1">{country.name}</h5>
          <p className="text-end mx-0 mb-3">
            {Number(country.today_confirmed).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
