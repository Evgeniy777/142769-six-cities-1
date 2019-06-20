import React from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';
import {connect} from 'react-redux';

const OffersList = (props) => {
  const {filteredOffers, onItemClick} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {filteredOffers.map((it, i) => {
        return <PlaceCard
          place={it}
          key={i}
          onItemClick={() => onItemClick(it)}
        />;
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    filteredOffers: state.filteredOffers
  });
};

export {OffersList};

export default connect(
    mapStateToProps
)(OffersList);

OffersList.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
};
