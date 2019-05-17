import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
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
            course
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
              course={edge.node.frontmatter.course}
              youth={edge.node.frontmatter.youth}
              semester={edge.node.frontmatter.semester}
              title={edge.node.frontmatter.title}
              image={edge.node.frontmatter.image.childImageSharp.fluid}
              key={edge.node.id}
            />
          ))}
        </GridThreeColumnContainer>
      </ContentWrapper>
    )}
  />
);

export default CCBCPage;
