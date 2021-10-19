import { React } from 'react';
import PropTypes from 'prop-types';
import CityInfo from './cityInfo';

const CityList = (props) => {
  const { country } = props;
  const cities = country.regions;
  let ans = (<p className="text-white text-center">No cityes information found!</p>);
  if (cities.length > 0) {
    ans = (
      <div className="row m-0 p-0">
        {cities.map((city, index) => (
          <div
            key={city.id}
            className={`
          col-12 no-underline m-0 text-white py-3 px-1
          ${(index % 2) === 0 ? 'intense-magenta' : 'light-magenta'}
        `}>
            <CityInfo city={city} />
          </div>
        ))}
      </div>
    );
  }

  CityList.prototype = {
    country: PropTypes.shape({
      regions: PropTypes.shape.isRequired,
    }),
  };

  return ans;
};

export default CityList;
