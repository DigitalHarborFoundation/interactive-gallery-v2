import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import { ImageCard } from '../components/elements/cards';

class Layout extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>{this.props.children}</AppWrapper>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
