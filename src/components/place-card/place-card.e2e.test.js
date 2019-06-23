import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from '../place-card/place-card.jsx';

configure({adapter: new Adapter()});

describe(`PlaceCard`, () => {
  it(`should call title handler function`, () => {
    const handler = jest.fn();

    const card = {
      bedrooms: 1,
      city: {
        name: `Paris`,
        location: {
          latitude: 48.87561,
          longitude: 2.375499,
          zoom: 16
        }
      },
      description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.,`,
      goods: [
        `Towels`
      ],
      host: {
        id: 25,
        name: `Angelina`,
        // is_pro: true,
        // avatar_url: `img/avatar-angelina.jpg`
      },
      id: 1,
      images: [
        `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`
      ],
      // is_favorite: false,
      // is_premium: true,
      location: {
        latitude: 48.87561,
        longitude: 2.375499,
        zoom: 16
      },
      // max_adults: 2,
      // preview_image: `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`,
      price: 231,
      rating: 2.7,
      title: `Beautiful & luxurious apartment at great location`,
      type: `room`
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
