import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryList from './CountryList';
import Filter from './SearchFilter';

function Home() {
  const [filter, setFilter] = useState('');
  const countries = useSelector((state) => state.countries);

  return (
    <div className="container-fluid px-0 light-magenta pt-3">
      <div className="row m-0">
        <div className="col-12 text-white d-flex flex-column justify-content-center">
          <h2 className="m-0">World</h2>
          <p>
            Infections:
            {' '}
            {Number(useSelector((state) => state.totalConfirmed)).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="row pointer m-0 mt-4 pt-3 intense-magenta">
        <div className="row mx-0">
          <div className="col-12 px-0">
            <Filter setFilter={setFilter} />
          </div>
        </div>
        <CountryList countries={countries} filter={filter} />
      </div>
    </div>
  );
}
export default Home;
