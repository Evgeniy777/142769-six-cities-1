import {placesFilter} from "../../mocks/data";

const initialState = {
  city: null,
  placesFilter,
  sort: placesFilter.POPULAR
};

const Actions = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: Actions.CHANGE_CITY,
      payload: city
    };
  },
  changeSort: (type) => {
    return {
      type: Actions.CHANGE_SORT,
      payload: type
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
  switch (type) {
    case Actions.CHANGE_SORT: return Object.assign({}, state, {
      sort: payload
    });
  }
  return state;
};

export {reducer, ActionCreator, Actions};
