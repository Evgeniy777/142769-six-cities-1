import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from '../offers-list/offers-list.jsx';

describe(`OffersList`, () => {
  it(`OffersList correctly renders`, () => {
    const offers = [
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
    const tree = renderer
      .create(<OffersList
        offers={offers}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
