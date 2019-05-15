import React from 'react';

import Layout from '../components/layout';

import { Container } from '../components/elements/layout-components';

import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Container>
  </Layout>
);

export default IndexPage;
