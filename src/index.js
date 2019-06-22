import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import App from '../src/components/app/app.jsx';
import {createAPI} from './api';
import reducer from './reducer';
import {Operation} from './reducer/data/data';
import {ActionCreator} from './reducer/app/app';
import {getDefaultCityName} from "./reducer/data/selectors";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  store.dispatch(Operation.loadOffers())
    .then(() => {
      const state = store.getState();
      const defaultCity = getDefaultCityName(state);
      store.dispatch(ActionCreator.changeCity(defaultCity));
    });
  ReactDOM.render(
      <Provider store={store}>
        <App />,
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
