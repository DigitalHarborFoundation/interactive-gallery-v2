import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const CCBC_QUERY = graphql`
  query CCBCQuery {
    CCBCEntry: allMarkdownRemark(
      filter: { frontmatter: { course: { eq: "ccbc-digifab-cohort" } } }
    ) {
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

// TODO: Make the project list more accessible by adding ul and li elements

const CCBCPage = () => (
  <StaticQuery
    query={CCBC_QUERY}
    render={({ CCBCEntry }) => (
      <ContentWrapper>
        <h2>CCBC Entries</h2>
        <GridThreeColumnContainer>
          {CCBCEntry.edges.map(edge => (
            <ProjectCard
              youth={edge.node.frontmatter.youth}
              semester={edge.node.frontmatter.semester}
              title={edge.node.frontmatter.title}
              key={edge.node.id}
            />
          ))}
        </GridThreeColumnContainer>
      </ContentWrapper>
    )}
  />
);

export default CCBCPage;
