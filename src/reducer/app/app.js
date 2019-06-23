import {placesFilter} from "../../mocks/data";

const initialState = {
  city: null,
  placesFilter,
  sort: placesFilter.POPULAR
};

const Actions = {
  CHANGE_CITY: `CHANGE_CITY`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: Actions.CHANGE_CITY,
      payload: city
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CHANGE_CITY: return Object.assign({}, state, {
      city: payload
    });
  }
  return state;
};

export {reducer, ActionCreator, Actions};
