export const FETCH_API_DATA = 'data/FETCH_API_DATA';

const LOAD_DATA = 'countries/LOAD_DATA';
const initialState = {};

const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const fetchApiData = async (dispatch) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  await fetch(`https://api.covid19tracking.narrativa.com/api/${currentDate}`)
    .then((response) => response.json())
    .then((data) => {
      const totalConfirmed = data.total.today_confirmed;
      const { countries } = data.dates[currentDate];
      dispatch(loadData({ countries, totalConfirmed }));
    });
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
