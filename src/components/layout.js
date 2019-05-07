import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import Hero from '../components/hero';
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Hero />
          <main>{children}</main>
          <Footer />
        </AppWrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
