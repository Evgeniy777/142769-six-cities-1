import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = (props = {}) => {
  const {cities = []} = props;
  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => {
            return (
              <li className="locations__item"key={i}>
                <a className="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>{it}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
