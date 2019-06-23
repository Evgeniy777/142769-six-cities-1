import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

export const getUser = (state) => state[NAME_SPACE].user;
export const getAuthorizationRequired = (state) => state[NAME_SPACE].isAuthorizationRequired;
