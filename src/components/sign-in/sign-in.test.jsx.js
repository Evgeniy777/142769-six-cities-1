import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';

describe(`SignIn`, () => {
  it(`SignIn renders correctly`, () => {
    const tree = renderer.create(
        <SignIn
          omSubmitUser={jest.fn()}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
