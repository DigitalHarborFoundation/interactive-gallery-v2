import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
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
