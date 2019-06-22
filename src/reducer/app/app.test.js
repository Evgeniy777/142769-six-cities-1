import {
  reducer,
  ActionCreator
} from "./app";

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

it(`Should change city`, () => {
  const neededCity = offers[3].city;
  const currentCity = offers[2].city;
  expect(reducer(
      {
        city: currentCity,
        filteredOffers: []
      },
      ActionCreator.changeCity(neededCity)
  )).toEqual({
    city: neededCity,
    filteredOffers: []
  });
});
