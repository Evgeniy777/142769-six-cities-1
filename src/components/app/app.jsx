import React from 'react';
import {Main} from '../main/main.jsx';
import {cities, user, placeSorting} from '../data';
import {offers} from '../../mocks/offers';

export const App = () => {
  return <Main offers={offers} cities={cities} user={user} placeSorting={placeSorting}/>;
};

