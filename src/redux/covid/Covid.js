export const FETCH_API_DATA = 'data/FETCH_API_DATA';
const LOAD_DATA = 'countries/LOAD_DATA';

const initialState = {};

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchData = (payload) => ({
  type: FETCH_API_DATA,
  payload,
});

const getDate = (store, action) => {
  let ans = new Date().toISOString().slice(0, 10);
  if (store.getState() !== initialState) {
    ans = store.getState().dataDate;
  }
  if (action.payload) {
    ans = action.payload;
  }
  return ans;
};

export const fetchApiData = (store) => (next) => (action) => {
  const dataDate = getDate(store, action);
  switch (action.type) {
    case FETCH_API_DATA:
      fetch(`https://api.covid19tracking.narrativa.com/api/${dataDate}`)
        .then((response) => response.json())
        .then((data) => {
          const totalConfirmed = data.total.today_confirmed;
          const { countries } = data.dates[dataDate];
          return next(loadData({ countries, totalConfirmed, dataDate }));
        });
      break;
    default:
      return next(action);
  }
  return next(loadData({}));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
