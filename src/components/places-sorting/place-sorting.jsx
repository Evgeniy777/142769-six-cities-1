import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSort, getPlacesFilter} from "../../reducer/app/selectors";
import {getFilteredOffers} from "../../reducer/data/selectors";
import {ActionCreator} from '../../reducer/app/app';

const PlaceSorting = (props) => {
  const {sort, placesFilter, onItemClick, onToggleMenu, onSorting} = props;
  const list = Object.values(placesFilter);

  const filterTitles = {
    [`POPULAR`]: `Popular`,
    [`PRICE_ASC`]: `Price: low to high`,
    [`PRICE_DESC`]: `Price: high to low`,
    [`TOP_RATED_FIRST`]: `Top rated first`
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onToggleMenu}>
        {filterTitles[sort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {list.map((it, i) => {
          const item = filterTitles[it];
          return (
            <li
              className={`places__option ${it === sort ? `places__option--active` : ``}`}
              tabIndex={i}
              key={`${item}-${i}`}
              onClick={() => {
                onItemClick(it);
                onSorting(it);
              }
              }>
              {item}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

PlaceSorting.propTypes = {
  sort: PropTypes.string.isRequired,
  placesFilter: PropTypes.object.isRequired,
  onSorting: PropTypes.func,
  onItemClick: PropTypes.func,
  onToggleMenu: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    sort: getSort(state),
    placesFilter: getPlacesFilter(state),
    filteredOffers: getFilteredOffers(state)
  });
};
const mapDispatchToProps = (dispatch) => ({
  onSorting: (type) => {
    dispatch(ActionCreator.changeSort(type));
  },
  onToggleMenu: () => {
    document.querySelector(`.places__options`).classList.toggle(`places__options--opened`);
  }
});

export {PlaceSorting};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceSorting);
