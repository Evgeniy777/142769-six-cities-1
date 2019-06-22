import axios from 'axios';
import {ActionCreator} from './reducer/data/data';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response && err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
    } else {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};