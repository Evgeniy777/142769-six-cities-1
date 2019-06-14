import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceSorting} from '../places-sorting/place-sorting.jsx';

describe(`PlaceSorting`, () => {
  it(`PlaceSorting correctly renders`, () => {
    const placesFilter = {
      POPULAR: `Popular`,
      PRICE_ASC: `Price: low to high`,
      PRICE_DESC: `Price: high to low`,
      TOP_RATED_FIRST: `Top rated first`
    };
    const tree = renderer
      .create(<PlaceSorting
        sort={placesFilter.POPULAR}
        placesFilter={placesFilter}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
