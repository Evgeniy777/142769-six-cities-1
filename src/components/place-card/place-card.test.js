import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from '../place-card/place-card.jsx';

describe(`PlaceCard`, () => {
  it(`PlaceCard correctly renders`, () => {
    const card = {
      city: `Amsterdam`,
      name: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      price: 180,
      premium: true,
      stars: 100,
      url: `img/apartment-03.jpg`,
      coordinates: [52.3809553943508, 4.939309666406198]
    };
    const tree = renderer
      .create(<PlaceCard
        place={card}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
