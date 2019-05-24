import React from 'react';
import PropTypes from 'prop-types';

export const PlaceSorting = (props = {}) => {
  const {placeSorting = []} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {placeSorting.map((it, i) => {
          return (
            <li className="places__option places__option--active" tabIndex="0" key={i}>{it}</li>
          );
        })}
      </ul>
    </form>
  );
};

PlaceSorting.propTypes = {
  placeSorting: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSorting: PropTypes.func
};
