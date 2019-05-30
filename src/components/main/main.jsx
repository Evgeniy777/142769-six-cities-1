import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../header/header.jsx';
import {PlaceSorting} from '../places-sorting/place-sorting.jsx';
import {OffersList} from '../offers-list/offers-list.jsx';
import {Tabs} from '../tabs/tabs.jsx';
import PlaceMap from '../place-map/place-map.jsx';

export const Main = (props = {}) => {
  const {offers = [], cities, user, placeSorting} = props;
  return (
    <div>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z">
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z">
            </path>
          </symbol>
        </svg>
      </div>
      <Header user={user}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities}/>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <PlaceSorting placeSorting={placeSorting}/>
              <OffersList offers={offers} />
            </section>
            <div className="cities__right-section">
              <PlaceMap offers={offers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  user: PropTypes.string.isRequired,
  placeSorting: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
