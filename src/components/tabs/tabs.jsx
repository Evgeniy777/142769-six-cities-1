import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const Tabs = (props = {}) => {
  const {city, cities = [], onChooseCity} = props;

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => {
            const isActive = it === city;
            return (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={() => onChooseCity(it)}>
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
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChooseCity: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: state.city,
    cities: state.cities,
    offers: state.offers
  });
};


const mapDispatchToProps = (dispatch) => ({
  onChooseCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {Tabs};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
