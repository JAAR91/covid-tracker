import PropTypes from 'prop-types';

const Filter = (props) => {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <div className="d-flex flex-column">
      <input type="date" className="form-control mb-1" />
      <input type="text" onChange={filterValues} className="form-control delete-shadow" placeholder="Search by country name" />
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
