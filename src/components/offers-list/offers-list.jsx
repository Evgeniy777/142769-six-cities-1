import React from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';
import {connect} from 'react-redux';
import {getFilteredOffers} from "../../reducer/data/selectors";
import {getSort} from "../../reducer/app/selectors";

const OffersList = (props) => {
  const {filteredOffers, onItemClick, sort} = props;

  const applySorting = (type, items = []) => {
    switch (type) {
      case `PRICE_ASC`: return items.sort((a, b) => a.price - b.price);
      case `PRICE_DESC`: return items.sort((a, b) => b.price - a.price);
      case `TOP_RATED_FIRST`: return items.sort((a, b) => b.rating - a.rating);
      case `POPULAR`: return items;
    }

    return items;
  };
  const sortedOffers = applySorting(sort, filteredOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((it, i) => {
        return <PlaceCard
          place={it}
          key={i}
          onItemClick={() => onItemClick(it)}
        />;
      })}
    </div>
  );
};

OffersList.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  sort: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    filteredOffers: getFilteredOffers(state),
    sort: getSort(state)
  });
};

export {OffersList};

export default connect(
    mapStateToProps
)(OffersList);
