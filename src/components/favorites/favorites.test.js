import React from 'react';
import renderer from 'react-test-renderer';
import {Favorites} from '../favorites/favorites.jsx';
import {MemoryRouter} from 'react-router-dom';

const user = {
  name: `Oliver.conner@gmail.com`
};

describe(`Favorites`, () => {
  it(`Favorites correctly renders`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Favorites
          user={user}
        />
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
