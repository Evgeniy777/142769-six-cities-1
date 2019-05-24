import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceSorting} from '../places-sorting/place-sorting.jsx';

describe(`PlaceSorting`, () => {
  it(`PlaceSorting correctly renders`, () => {
    const placeSorting = [
      `Popular`,
      `Price: low to high`,
      `Price: high to low`,
      `Top rated first`
    ];
    const tree = renderer
      .create(<PlaceSorting
        placeSorting={placeSorting}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
