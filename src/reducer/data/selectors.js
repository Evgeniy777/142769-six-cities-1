import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';
import {getCity} from '../app/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => state[NAME_SPACE].offers;
export const getCities = (state) => state[NAME_SPACE].cities;
export const getDefaultCityName = createSelector(
    getCities,
    (cities) => cities[0].name
);
export const getFilteredOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((it) => it.city.name === city)
);
