import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {getUser} from "../reducer/user/selectors";

const withUserRequired = (Component) => {
  class WithUserRequired extends React.PureComponent {
    render() {
      debugger;
      const {user} = this.props;

      if (!Object.values(user).length) {
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
      user: getUser(state)
    });
  };

  WithUserRequired.propTypes = {
    user: PropTypes.object.isRequired
  };

  return connect(
      mapStateToProps,
      null
  )(WithUserRequired);
};

export default withUserRequired;
