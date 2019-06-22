import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app';

import {getCities} from "../../reducer/data/selectors";
import {getCity} from "../../reducer/app/selectors";

const Tabs = (props) => {
  const {city, cities, onChooseCity, onItemClick} = props;

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(cities).map((it, i) => {
            const {name} = it;
            const isActive = name === city;
            return (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={() => {
                    onItemClick(it);
                    onChooseCity(name);
                  }}>
                  <span>{name}</span>
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
  city: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChooseCity: PropTypes.func,
  onItemClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: getCity(state),
    cities: getCities(state)
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
