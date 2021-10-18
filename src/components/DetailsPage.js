import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const { id } = params;
  const countries = useSelector((state) => state.countries);
  let country = null;
  if (countries) {
    country = Object.values(countries).find((country) => country.id === id);
  }

  return (
    <div className="container-fluid light-magenta mt-3 px-0">
      <div className="row m-0">
        <div className="col-12 text-white">
          <h3 className="fw-bold m-0">{country ? country.name.toUpperCase() : 'Loading...'}</h3>
          <p className="m-0">
            Infections:
            {' '}
            {country ? Number(country.today_confirmed).toLocaleString() : '0'}
          </p>
          <p>
            Deaths:
            {' '}
            {country ? Number(country.today_deaths).toLocaleString() : '0'}
          </p>
        </div>
        <ul className="col-12">
          <li>
            <p className="text-white">
              New confirm:
              { country ? country.today_new_confirmed : '0'}
            </p>
          </li>
          <li>
            <p className="text-white">
              New deaths:
              { country ? country.today_new_deaths : '0' }
            </p>
          </li>
          <li>
            <p className="text-white">
              New recovered:
              { country ? country.today_new_recovered : '0' }
            </p>
          </li>
          <li>
            <p className="text-white">
              Open Cases:
              { country ? country.today_open_cases : '0' }
            </p>
          </li>
          <li>
            <p className="text-white">
              New Open Cases:
              { country ? country.today_new_open_cases : '0' }
            </p>
          </li>
          <li>
            <p className="text-white">
              Source:
              { country ? country.source : '0' }
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
