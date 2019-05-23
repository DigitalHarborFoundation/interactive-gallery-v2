import React from 'react';

import { GlobalStyle } from '../components/globalStyle';
import { AppWrapper } from '../components/elements/layout-components';
import Hero from '../components/hero';
import SEO from '../components/seo';

const ContactPage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
      <h1>CONTACT</h1>
    </AppWrapper>
  </React.Fragment>
);

export default ContactPage;
