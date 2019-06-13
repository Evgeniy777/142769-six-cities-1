import {offers, cities} from "./mocks/offers";
import {user, placesFilter} from "./mocks/data";

const getOffers = (name) => offers.filter((offer) => offer.city === name);

const defaultCity = cities[0];

const initialState = {
  city: defaultCity.name,
  offers: getOffers(defaultCity.name),
  user,
  placesFilter,
  sort: placesFilter.POPULAR
};

const Actions = {
  CHANGE_CITY: `CHANGE_CITY`,
  RESET_CITY: `RESET_CITY`
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
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CHANGE_CITY: return Object.assign({}, state, {
      city: payload,
      offers: getOffers(payload)
    });
    case Actions.RESET_CITY: return initialState;
  }
  return state;
};

export {reducer, getOffers, ActionCreator};
