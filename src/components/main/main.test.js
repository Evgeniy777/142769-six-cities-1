import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from '../main/main.jsx';
import {Provider} from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import {PlaceMap} from '../place-map/place-map.jsx';

describe(`Main`, () => {
  it(`Main correctly renders`, () => {
    const offers = [
      {
        city: `Paris`,
        name: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        price: 120,
        premium: true,
        stars: 93,
        url: `img/apartment-01.jpg`,
        coordinates: [52.3909553943508, 4.85309666406198]
      },
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
        city: `Brussels`,
        name: `Canal View Prinsengracht`,
        type: `Apartment`,
        price: 132,
        premium: false,
        stars: 80,
        url: `img/apartment-02.jpg`,
        coordinates: [52.3909553943508, 4.929309666406198]
      },
      {
        city: `Amsterdam`,
        name: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        price: 180,
        premium: true,
        stars: 100,
        url: `img/apartment-03.jpg`,
        coordinates: [52.3809553943508, 4.939309666406198]
      },
      {
        city: `Hamburg`,
        name: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        premium: false,
        stars: 80,
        url: `img/room.jpg`,
        coordinates: [52.3809533943508, 4.939309666406198]
      },
      {
        city: `Dusseldorf`,
        name: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        premium: false,
        stars: 80,
        url: `img/room.jpg`,
        coordinates: [52.3809533943508, 4.939309666406198]
      }
    ];

    const cities = [
      {
        name: `Paris`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Cologne`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Brussels`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Amsterdam`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Hamburg`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Dusseldorf`,
        coordinates: [52.38333, 4.9]
      }
    ];

    const placesFilter = {
      POPULAR: `Popular`,
      PRICE_ASC: `Price: low to high`,
      PRICE_DESC: `Price: high to low`,
      TOP_RATED_FIRST: `Top rated first`
    };

    const initialState = {
      city: cities[0].name,
      cities,
      offers,
      user: `xxx@xxx.gmail.com`,
      placesFilter,
      sort: placesFilter.POPULAR
    };
    PlaceMap.prototype.componentDidMount = jest.fn();
    const mockStore = reduxMockStore();
    const store = mockStore(initialState);
    const tree = renderer
      .create(<Provider store={store}>
        <Main
          offers={offers}
          city={cities[0].name}
        /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
