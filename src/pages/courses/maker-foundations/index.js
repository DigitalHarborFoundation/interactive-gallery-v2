import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const MAKER_FOUNDATIONS_QUERY = graphql`
  query MakerFoundationsQuery {
    MakerFoundationsEntry: allMarkdownRemark(
      filter: { frontmatter: { course: { eq: "maker-foundations" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            youth
            semester
            course
          }
        }
      }
    }
  }
`;

// TODO: Make the project list more accessible by adding ul and li elements

const MakerFoundationsPage = () => (
  <StaticQuery
    query={MAKER_FOUNDATIONS_QUERY}
    render={({ MakerFoundationsEntry }) => (
      <Layout>
        <ContentWrapper>
          <h2>Maker Foundations Entries</h2>
          <GridThreeColumnContainer>
            {MakerFoundationsEntry.edges.map(edge => (
              <ProjectCard
                course={edge.node.frontmatter.course}
                youth={edge.node.frontmatter.youth}
                semester={edge.node.frontmatter.semester}
                title={edge.node.frontmatter.title}
                key={edge.node.id}
              />
            ))}
          </GridThreeColumnContainer>
        </ContentWrapper>
      </Layout>
    )}
  />
);

export default MakerFoundationsPage;
