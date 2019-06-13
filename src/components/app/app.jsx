import React from 'react';
import {Main} from '../main/main.jsx';
import {offers, cities} from "../../mocks/offers";

export const App = () => {
  return <Main
    offers={offers}
    cities={cities}
  />;
};
