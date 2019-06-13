import {reducer, ActionCreator, getOffers} from "./reducer";
import {offers} from "./mocks/offers";

it(`Should change city`, () => {
  const neededCity = offers[3].city;
  const currentCity = offers[2].city;
  expect(reducer(
      {
        city: currentCity,
        offers: getOffers(currentCity)
      },
      ActionCreator.changeCity(neededCity)
  )).toEqual({
    city: neededCity,
    offers: getOffers(neededCity)
  });
});

it(`Should reset city`, () => {
  const defaultCity = offers[0].city;
  const currentCity = offers[2].city;
  expect(reducer(
      {
        city: currentCity,
        offers: getOffers(currentCity)
      },
      ActionCreator.resetCity(defaultCity)
  )).toEqual({
    city: defaultCity,
    offers: getOffers(defaultCity)
  });
});
