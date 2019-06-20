import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import {connect} from 'react-redux';

class PlaceMap extends PureComponent {
  constructor(props) {
    super(props);
    this.zoom = 12;
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }

    const {city, cities, filteredOffers} = this.props;
    const cityObj = cities.find((item) => item.name === city);
    const {coordinates} = cityObj;
    this.map.setView(coordinates, this.zoom);
    this._removeMarkers();
    this._setMarkers(filteredOffers);
  }

  _setMarkers(offers) {
    const markers = offers.map((offer) => {
      const {location, title} = offer;
      return L
        .marker([location.latitude, location.longitude], {
          icon: this._icon,
          title
        })
        .addTo(this.map);
    });

    this._markersGroup = L
      .layerGroup(markers)
      .addTo(this.map);
  }

  _removeMarkers() {
    if (this._markersGroup) {
      this._markersGroup.clearLayers();
    }
    this._markersGroup = null;
  }

  init() {
    const {city, cities, filteredOffers} = this.props;
    const cityObj = cities.find((item) => item.name === city);
    const {coordinates} = cityObj;
    this._icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = L.map(`map`, {
      center: coordinates,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(coordinates, this.zoom);

    L
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._setMarkers(filteredOffers);
  }

  render() {
    return <div id="map" style={{height: `100%`}}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    city: state.city,
    cities: state.cities,
    filteredOffers: state.filteredOffers
  });
};


export {PlaceMap};

export default connect(
    mapStateToProps
)(PlaceMap);

PlaceMap.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filteredOffers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};
