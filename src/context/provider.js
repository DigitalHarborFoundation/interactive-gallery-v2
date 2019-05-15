import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    open: true,
    showModal: () => this.setState({ open: true }),
    hideModal: () => this.setState({ open: false }),
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
