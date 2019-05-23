import React from 'react';

import { GlobalStyle } from '../components/globalStyle';
import { AppWrapper } from '../components/elements/layout-components';
import Hero from '../components/hero';
import SEO from '../components/seo';

const AboutPage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <h1>ABOUT</h1>
    </AppWrapper>
  </React.Fragment>
);

export default AboutPage;
