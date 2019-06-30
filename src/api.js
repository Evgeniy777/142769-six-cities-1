import axios from 'axios';

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response && err.response.status === 403) {
      // dispatch(ActionCreator.requireAuthorization(true));
      // history.pushState(null, null, `/login`);
      onLoginFail();
      return;
    } else {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
