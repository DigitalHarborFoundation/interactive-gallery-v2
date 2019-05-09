import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const CS_CORE_QUERY = graphql`
  query CSCoreQuery {
    allMarkdownRemark(filter: { frontmatter: { course: { eq: "cs-core" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            youth
            semester
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
      <ContentWrapper>
        <h2>CS Core Entries</h2>
        {allMarkdownRemark.edges.map(edge => (
          <GridThreeColumnContainer>
            <ul>
              <li style={{ listStyle: 'none' }}>
                <ProjectCard
                  youth={edge.node.frontmatter.youth}
                  semester={edge.node.frontmatter.semester}
                  key={edge.node.id}
                />
              </li>
            </ul>
          </GridThreeColumnContainer>
        ))}
      </ContentWrapper>
    )}
  />
);

export default CSCorePage;
