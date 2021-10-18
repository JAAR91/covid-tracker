import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/covid/Covid';

const Filter = (props) => {
  const [dataDate, setdataDate] = useState(useSelector((store) => store.dataDate));
  const dispatch = useDispatch();
  const updateDateInput = (event) => {
    setdataDate(event.target.value);
    dispatch(fetchData(event.target.value));
  };
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <div className="d-flex flex-column m-0">
      <input type="date" className="form-control mb-1" value={dataDate} onChange={updateDateInput} max={new Date().toISOString().slice(0, 10)} min="2020-01-23" />
      <input type="text" onChange={filterValues} className="form-control delete-shadow" placeholder="Search by country name" />
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
