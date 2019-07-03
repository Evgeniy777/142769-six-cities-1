import React from 'react';
import renderer from 'react-test-renderer';
import {OfferDetails} from '../offer-details/offer-details.jsx';

const id = `1`;
const filteredOffers = [{
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
    name: `Angelina`
  },
  id: 1,
  images: [
    `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`
  ],
  location: {
    latitude: 48.87561,
    longitude: 2.375499,
    zoom: 16
  },
  price: 231,
  rating: 2.7,
  title: `Beautiful & luxurious apartment at great location`,
  type: `room`
}];

describe(`Favorites`, () => {
  it(`Favorites correctly renders`, () => {
    const tree = renderer.create(
        <OfferDetails
          id={id}
          filteredOffers={filteredOffers}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
