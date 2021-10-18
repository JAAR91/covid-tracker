import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { country, index } = props;

  if (country) {
    return (
      <Link
        to={`/country/${country.id}`}
        className={`
      col-6
      ${([1, 0, 0, 1][index % 4]) === 0 ? 'intense-magenta' : 'light-magenta'}
    `}>
        <div className="d-flex flex-column justify-content-between m-0 p-1">
          <h5 className="m-0 text-end text-white fw-bold fs-6">{country.name.toUpperCase()}</h5>
          <p className="text-white text-end m-0">
            {`Infections:  ${Number(country.today_confirmed).toLocaleString()}`}
          </p>
        </div>
      </Link>
    );
  }

  return <p>pussy</p>;
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
