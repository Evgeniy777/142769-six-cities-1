import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from '../offers-list/offers-list.jsx';

describe(`OffersList`, () => {
  it(`OffersList correctly renders`, () => {
    const filteredOffers = [
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
        city: `Cologne`,
        name: `Hotel Novotel Brussels off Grand Place`,
        type: `Apartment`,
        price: 132,
        premium: false,
        stars: 80,
        url: `img/apartment-02.jpg`,
        coordinates: [50.846309, 4.355026]
      }
    ];
    const tree = renderer
      .create(<OffersList
        filteredOffers={filteredOffers}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
