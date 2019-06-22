import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {
  Operation,
  Actions
} from "./data";


it(`Should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI();
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

  return offersLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: Actions.LOAD_OFFERS,
        payload: [{fake: true}]
      });
    });
});
