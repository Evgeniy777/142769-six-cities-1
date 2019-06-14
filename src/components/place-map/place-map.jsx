import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import {connect} from 'react-redux';

class PlaceMap extends PureComponent {
  constructor(props) {
    super(props);
    this.defaultCity = [52.38333, 4.9];
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const {offers = []} = this.props;
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = L.map(`map`, {
      center: this.defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this.defaultCity, zoom);

    L
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      const {coordinates, name} = offer;
      L
        .marker(coordinates, {icon, title: name})
        .addTo(map);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return  Object.assign({}, ownProps, {
    offers: state.offers,
  });
};


export {PlaceMap};

export default connect(
  mapStateToProps
)(PlaceMap);

PlaceMap.propTypes = {
  offers: PropTypes.array.isRequired
};
