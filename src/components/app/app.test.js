import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app/app.jsx';
import PlaceMap from '../place-map/place-map.jsx';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    premium: true,
    stars: 93,
    url: `img/apartment-01.jpg`
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    premium: false,
    stars: 80,
    url: `img/room.jpg`
  },
  {
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    premium: false,
    stars: 80,
    url: `img/apartment-02.jpg`
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    premium: true,
    stars: 100,
    url: `img/apartment-03.jpg`
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    premium: false,
    stars: 80,
    url: `img/room.jpg`
  }
];

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

describe(`App`, () => {
  it(`App correctly renders`, () => {
    PlaceMap.prototype.componentDidMount = jest.fn();
    const tree = renderer
      .create(<App
        offers={offers}
        cities={cities}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
