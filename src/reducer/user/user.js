const initialState = {
  user: {},
  isAuthorizationRequired: false
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN_USER: `LOGIN_USER`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: Actions.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  loginUser: (payload) => {
    return {
      type: Actions.LOGIN_USER,
      payload
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: payload
    });
    case Actions.LOGIN_USER: return Object.assign({}, state, {
      user: payload
    });
  }
  return state;
};

export {reducer, ActionCreator, Actions};
