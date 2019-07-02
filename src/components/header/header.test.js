import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../header/header.jsx';
import {MemoryRouter} from 'react-router-dom';

const user = {};

describe(`Header`, () => {
  it(`Header correctly renders`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Header
          user={user}
        />
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
