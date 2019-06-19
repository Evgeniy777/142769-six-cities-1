import {cities} from "./mocks/offers";
import {user, placesFilter} from "./mocks/data";

const getOffers = (name) => offers.filter((offer) => offer.city === name);

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    debugger;
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const defaultCity = cities[0];

const initialState = {
  city: defaultCity.name,
  cities,
  offers: [],
  user,
  placesFilter,
  sort: placesFilter.POPULAR,
  isAuthorizationRequired: false
};

const Actions = {
  CHANGE_CITY: `CHANGE_CITY`,
  RESET_CITY: `RESET_CITY`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: Actions.CHANGE_CITY,
      payload: city
    };
  },
  resetCity: (city) => {
    return {
      type: Actions.RESET_CITY,
      payload: city
    };
  },
  loadOffers: (offers) => {
    return {
      type: Actions.LOAD_OFFERS,
      payload: offers
    };
  },
  requireAuthorization: (status) => {
    return {
      type: Actions.REQUIRED_AUTHORIZATION,
      payload: status
    }
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CHANGE_CITY: return Object.assign({}, state, {
      city: payload,
      offers: getOffers(payload)
    });
    case Actions.RESET_CITY: return Object.assign({}, initialState);
    case ActionCreator.LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer, getOffers, ActionCreator, Operation};
