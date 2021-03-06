import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const PlaceCard = (props) => {
  const {place, onItemClick} = props;
  const {description, rating, price, title, type, id} = place;
  const stars = Number(rating) * 100 / 5;
  return (
    <article className="cities__place-card place-card">
      {place.is_premium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={place.preview_image} width="260" height="200" alt={title} title={description}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: stars + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => onItemClick()}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.object.isRequired,
  onItemClick: PropTypes.func
};
