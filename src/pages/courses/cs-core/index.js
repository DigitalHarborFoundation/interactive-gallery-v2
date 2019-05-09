import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const CS_CORE_QUERY = graphql`
  query CSCoreQuery {
    allMarkdownRemark(filter: { frontmatter: { course: { eq: "cs-core" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const CSCorePage = () => (
  <StaticQuery
    query={CS_CORE_QUERY}
    render={({ allMarkdownRemark }) => (
      <div>
        <h2>Entries</h2>
        {allMarkdownRemark.edges.map(edge => (
          <h3>{edge.node.frontmatter.title}</h3>
        ))}
      </div>
    )}
  />
);

export default CSCorePage;
