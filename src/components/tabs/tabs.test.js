import React from 'react';
import renderer from 'react-test-renderer';
import {Tabs} from '../tabs/tabs.jsx';

describe(`Tabs`, () => {
  it(`Tabs correctly renders`, () => {
    const cities = [
      `Paris`,
      `Cologne`,
      `Brussels`,
      `Amsterdam`,
      `Hamburg`,
      `Dusseldorf`
    ];
    const tree = renderer
      .create(<Tabs
        cities={cities}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
