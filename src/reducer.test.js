import {reducer, ActionCreator, getOffers} from "./reducer";

const offers = [
  {
    city: `Paris`,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    premium: true,
    stars: 93,
    url: `img/apartment-01.jpg`,
    coordinates: [48.85306, 2.34528]
  },
  {
    city: `Cologne`,
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    premium: false,
    stars: 80,
    url: `img/room.jpg`,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    city: `Brussels`,
    name: `Hotel Novotel Brussels off Grand Place`,
    type: `Apartment`,
    price: 132,
    premium: false,
    stars: 80,
    url: `img/apartment-02.jpg`,
    coordinates: [50.846309, 4.355026]
  },
  {
    city: `Brussels`,
    name: `Hilton Brussels Grand Place`,
    type: `Apartment`,
    price: 132,
    premium: false,
    stars: 80,
    url: `img/apartment-02.jpg`,
    coordinates: [50.845979, 4.356129]
  },
  {
    city: `Amsterdam`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    premium: true,
    stars: 100,
    url: `img/apartment-03.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    city: `Brussels`,
    name: `Hotel Novotel Brussels off Grand Place`,
    type: `Apartment`,
    price: 132,
    premium: false,
    stars: 80,
    url: `img/apartment-03.jpg`,
    coordinates: [50.046309, 4.355026]
  },
  {
    city: `Brussels`,
    name: `Hilton Brussels Grand Place`,
    type: `Apartment`,
    price: 132,
    premium: false,
    stars: 80,
    url: `img/room.jpg`,
    coordinates: [50.245979, 4.256129]
  },
  {
    city: `Hamburg`,
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    premium: false,
    stars: 80,
    url: `img/room.jpg`,
    coordinates: [53.535, 10.04082]
  },
  {
    city: `Dusseldorf`,
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    premium: false,
    stars: 80,
    url: `img/room.jpg`,
    coordinates: [52.3809533943508, 4.939309666406198]
  }
];

const cities = [
  {
    name: `Paris`,
    coordinates: [48.864716, 2.349014]
  },
  {
    name: `Cologne`,
    coordinates: [50.941357, 6.958307]
  },
  {
    name: `Brussels`,
    coordinates: [50.8505, 4.3488]
  },
  {
    name: `Amsterdam`,
    coordinates: [52.370216, 4.895168]
  },
  {
    name: `Hamburg`,
    coordinates: [53.551086, 9.993682]
  },
  {
    name: `Dusseldorf`,
    coordinates: [51.217941, 6.761680]
  }
];

const placesFilter = {
  POPULAR: `Popular`,
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

const user = `Oliver.conner@gmail.com`;

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
    cities,
    offers: getOffers(defaultCity),
    user,
    placesFilter,
    sort: placesFilter.POPULAR
  });
});
