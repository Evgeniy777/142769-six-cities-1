import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from '../main/main.jsx';

describe(`Main`, () => {
  it(`Main correctly renders`, () => {
    const places = [
      {
        name: `Beautiful & luxurious apartment at gr eautiful & luxurious apartmenteat location`,
        type: `Apartment`,
        price: 520,
        premium: true,
        stars: 93,
        url: `img/apartment-01.jpg`
      },
      {
        name: `Wood Wood and stone place and stone place`,
        type: `Private room`,
        price: 480,
        premium: false,
        stars: 20,
        url: `img/room.jpg`
      },
      {
        name: `Canal View Prinsengracht`,
        type: `Apartment`,
        price: 1672,
        premium: true,
        stars: 40,
        url: `img/apartment-02.jpg`
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

    const placeSorting = [
      `Popular`,
      `Price: low to high`,
      `Price: high to low`,
      `Top rated first`
    ];

    const user = `conne.oliverr@gmail.com`;

    const tree = renderer
      .create(<Main
        places={places}
        cities={cities}
        placeSorting={placeSorting}
        user={user}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
