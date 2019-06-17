import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={(activeItem) => this._onItemClick(activeItem)}
        />
      );
    }

    _onItemClick(activeItem) {
      this.setState({activeItem});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
