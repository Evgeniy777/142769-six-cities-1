const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const initialState = {
  cities: [],
  offers: [],
  filteredOffers: []
};

const Actions = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: Actions.LOAD_OFFERS,
      payload: offers
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.LOAD_OFFERS: {
      const cities = new Map();
      payload.forEach((offer) => cities.set(offer.city.name, offer.city));
      const filteredCities = Array.from(cities.values());
      return Object.assign({}, state, {
        offers: payload,
        cities: filteredCities
      });
    }
  }
  return state;
};

export {reducer, ActionCreator, Operation, Actions};
