import {cities} from "./mocks/offers";
import {user, placesFilter} from "./mocks/data";

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  filterOffers: (city, offers) => offers.filter((it) => it.city.name === city)
};

const defaultCity = cities[0];

const initialState = {
  city: defaultCity.name,
  cities,
  offers: [],
  filteredOffers: [],
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
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CHANGE_CITY: return Object.assign({}, state, {
      city: payload,
      filteredOffers: Operation.filterOffers(action.payload, state.offers)
    });
    case Actions.RESET_CITY: return Object.assign({}, initialState);
    case Actions.LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload,
      filteredOffers: Operation.filterOffers(state.city, action.payload)
    });
  }
  return state;
};

export {reducer, ActionCreator, Operation};
