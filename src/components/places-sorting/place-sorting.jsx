import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSort, getPlacesFilter} from "../../reducer/app/selectors";

const PlaceSorting = (props = {}) => {
  const {sort, placesFilter} = props;
  const list = Object.values(placesFilter);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {list.map((it, i) => {
          const item = placesFilter[it];
          return (
            <li
              className={`places__option ${item === sort ? `places__option--active` : ``}`}
              tabIndex="0"
              key={`${item}-${i}`}>
              {it}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    sort: getSort(state),
    placesFilter: getPlacesFilter(state)
  });
};

export {PlaceSorting};

export default connect(
    mapStateToProps
)(PlaceSorting);

PlaceSorting.propTypes = {
  sort: PropTypes.string.isRequired,
  placesFilter: PropTypes.object.isRequired,
  onSorting: PropTypes.func
};
