import { React } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CityInfo from './cityInfo';

const CityList = () => {
  const params = useParams();
  let { id } = params;
  id = id[0].toUpperCase() + id.slice(1, id.length);
  const country = useSelector((store) => store.countries[id]);
  const cities = country.regions;
  let ans = (<p className="text-white text-center">No cityes information found!</p>);
  if (cities.length > 0) {
    ans = (
      <div className="row m-0 p-0">
        {cities.map((city, index) => (
          <div
            key={city.id}
            className={`
          col-6 no-underline m-0 text-white text-end
          ${([1, 0, 0, 1][index % 4]) === 0 ? 'intense-magenta' : 'light-magenta'}
        `}>
            <CityInfo city={city} />
          </div>
        ))}
      </div>
    );
  }

  return ans;
};

export default CityList;
