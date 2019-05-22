import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from '../place-card/place-card.jsx';

configure({adapter: new Adapter()});

describe(`PlaceCard`, () => {
  it(`should call title handler function`, () => {
    const handler = jest.fn();
    const card = {
      name: `Wood and stone place`,
      price: 80,
      premium: false,
      stars: 80,
      onTitleClick: handler
    };
    const wrapper = shallow(
        <PlaceCard place={card} />
    );
    const title = wrapper.find(`.place-card__name`);
    expect(title.length).toEqual(1);
    title.simulate(`click`);
    expect(handler.mock.calls.length).toEqual(1);
  });
});
