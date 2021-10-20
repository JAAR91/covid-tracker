import narrativaAPI from './__mocks__/narrrativaAPI';
import store from '../redux/StoreSetUp';
import { loadData } from '../redux/covid/Covid';

describe('store test', () => {
  beforeEach(() => {
    store.dispatch(loadData(narrativaAPI));
  });

  test('store get 191 country information', () => {
    const { countries } = store.getState();
    expect(Object.keys(countries).length).toBe(191);
  });
});
