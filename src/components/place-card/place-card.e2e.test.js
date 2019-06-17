import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from '../place-card/place-card.jsx';

configure({adapter: new Adapter()});

describe(`PlaceCard`, () => {
  it(`should call title handler function`, () => {
    const handler = jest.fn();
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
    const wrapper = shallow(
        <PlaceCard place={card} onItemClick={handler}/>
    );
    const title = wrapper.find(`.place-card__name`);
    expect(title.length).toEqual(1);
    title.simulate(`click`);
    expect(handler.mock.calls.length).toEqual(1);
  });
});
