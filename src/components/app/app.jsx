import React from 'react';
import {Main} from '../main/main.jsx';
import {places, cities, user, placeSorting} from '../data';

export const App = () => {
  return <Main places={places} cities={cities} user={user} placeSorting={placeSorting}/>;
};

