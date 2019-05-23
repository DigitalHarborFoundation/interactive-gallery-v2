import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GlobalStyle } from '../components/globalStyle';
import { AppWrapper } from '../components/elements/layout-components';
import Hero from '../components/hero';
import DHFFooter from '../components/dhf-footer';
import Footer from '../components/footer';
import SEO from '../components/seo';

const IndexPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryIndex {
        site {
          siteMetadata {
            title
            semester
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <AppWrapper>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Hero semester={data.site.siteMetadata.semester} />
        </AppWrapper>
      </>
    )}
  />
);

export default IndexPage;
