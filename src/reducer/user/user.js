import {user} from "../../mocks/data";

const initialState = {
  user,
  isAuthorizationRequired: false
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

const ActionCreator = {
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
    case Actions.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: payload
    });
  }
  return state;
};

export {reducer, ActionCreator, Actions};
