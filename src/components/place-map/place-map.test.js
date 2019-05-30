import React from 'react';
import renderer from 'react-test-renderer';
import PlaceMap from '../place-map/place-map.jsx';

describe(`PlaceMap`, () => {
  it(`PlaceMap correctly renders`, () => {
    const offers = [
      {
        name: `Beautiful & luxurious apartment at gr eautiful & luxurious apartmenteat location`,
        type: `Apartment`,
        price: 520,
        premium: true,
        stars: 93,
        url: `img/apartment-01.jpg`,
        coordinates: [52.3809533943508, 4.939309666406198]
      },
      {
        name: `Wood Wood and stone place and stone place`,
        type: `Private room`,
        price: 480,
        premium: false,
        stars: 20,
        url: `img/room.jpg`,
        coordinates: [52.3909553943508, 4.85309666406198]
      },
      {
        name: `Canal View Prinsengracht`,
        type: `Apartment`,
        price: 1672,
        premium: true,
        stars: 40,
        url: `img/apartment-02.jpg`,
        coordinates: [52.3709553943508, 4.89309666406198]
      }
    ];
    const tree = renderer
      .create(<PlaceMap
        offers={offers}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
