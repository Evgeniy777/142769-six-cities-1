import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser, getAuthorizationRequired} from "../../reducer/user/selectors";
import {ActionCreator} from '../../reducer/user/user';
import {Link} from 'react-router-dom';


const Header = (props) => {
  const {user, onUserClick} = props;
  const {name} = user;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onUserClick(!!name);
                  }}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {name ? <Link to="/favorites" className="header__user-name user__name">{name}</Link> : <span className="header__login">Sign in</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool,
  onUserClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onUserClick: (isUserExist) => {
    if (!isUserExist) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
  }
});

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    user: getUser(state),
    isAuthorizationRequired: getAuthorizationRequired(state)
  });

export {Header};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
