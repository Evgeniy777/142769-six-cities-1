import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../header/header.jsx';

const user = {};

describe(`Header`, () => {
  it(`Header correctly renders`, () => {
    const tree = renderer
      .create(<Header
        user={user}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
