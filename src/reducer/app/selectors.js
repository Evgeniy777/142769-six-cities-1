import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.APP;

export const getCity = (state) => state[NAME_SPACE].city;
export const getPlacesFilter = (state) => state[NAME_SPACE].placesFilter;
export const getSort = (state) => state[NAME_SPACE].sort;
