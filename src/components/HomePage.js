import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryList from './CountryList';
import Filter from './SearchFilter';
import worldImg from '../img/world.png';

function Home() {
  const [filter, setFilter] = useState('');
  const countries = useSelector((state) => state.countries);

  return (
    <div className="d-flex flex-column m-0 p-0 light-magenta">
      <div className="d-flex flex-row justify-content-center align-items-center p-0">
        <img alt="" src={worldImg} className="world-img m-0" />
        <div>
          <h1 className="m-0">World</h1>
          <p>
            Infections:
            {' '}
            {Number(useSelector((state) => state.totalConfirmed)).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="col-12 p-2 m-0 intense-magenta">
        <Filter setFilter={setFilter} />
      </div>
      <div className="row pointer mt-1 p-0 intense-magenta">
        <CountryList countries={countries} filter={filter} />
      </div>
    </div>
  );
}
export default Home;
