import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const FAB_CORE_QUERY = graphql`
  query FabCoreQuery {
    FabCoreEntry: allMarkdownRemark(
      filter: { frontmatter: { course: { eq: "fab-core" } } }
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

const FabCorePage = () => (
  <StaticQuery
    query={FAB_CORE_QUERY}
    render={({ FabCoreEntry }) => (
      <ContentWrapper>
        <h2>Fab Core Entries</h2>
        <GridThreeColumnContainer>
          {FabCoreEntry.edges.map(edge => (
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

export default FabCorePage;
