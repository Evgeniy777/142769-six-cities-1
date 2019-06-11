import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from '../place-card/place-card.jsx';

describe(`PlaceCard`, () => {
  it(`PlaceCard correctly renders`, () => {
    const card = {
      name: `Wood and stone place`,
      type: `Private room`,
      price: 80,
      premium: false,
      stars: 80,
      url: `img/room.jpg`
    };
    const tree = renderer
      .create(<PlaceCard
        place={card}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
