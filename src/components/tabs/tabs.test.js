import React from 'react';
import renderer from 'react-test-renderer';
import {Tabs} from '../tabs/tabs.jsx';

describe(`Tabs`, () => {
  it(`Tabs correctly renders`, () => {
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
    const city = `Dusseldorf`;
    const tree = renderer
      .create(<Tabs
        city={city}
        cities={cities}
        onItemClick={jest.fn()}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
