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

  const todaysDate = new Date().toISOString().slice(0, 10);
  return (
    <div className="d-flex flex-column m-0">
      <input
        type="date"
        className="form-control mb-1"
        value={dataDate || todaysDate}
        onChange={updateDateInput}
        max={todaysDate}
        min="2020-01-23"
        id="dateInput"
      />
      <input type="text" onChange={filterValues} className="form-control delete-shadow" placeholder="Search by country name" />
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
