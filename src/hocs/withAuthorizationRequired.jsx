import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {getAuthorizationRequired} from "../reducer/user/selectors";

const withAuthorizationRequired = (Component) => {
  class WithAuthorizationRequired extends React.PureComponent {
    render() {
      const {isAuthorizationRequired} = this.props;

      if (isAuthorizationRequired) {
        return <Redirect to="/login" />;
      }

      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
      isAuthorizationRequired: getAuthorizationRequired(state)
    });
  };

  WithAuthorizationRequired.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return connect(
      mapStateToProps,
      null
  )(WithAuthorizationRequired);
};

export default withAuthorizationRequired;
