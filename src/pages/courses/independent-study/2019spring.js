import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const INDEPENDENT_STUDY_QUERY = graphql`
  query IndependentStudyQuery {
    IndependentStudyEntry: allMarkdownRemark(
      filter: {
        frontmatter: {
          semester: { in: ["2019spring"] }
          course: { eq: "independent-study" }
        }
      }
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
                fluid(maxWidth: 300, maxHeight: 200, quality: 100) {
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

const IndependentStudySpring2019Page = () => (
  <StaticQuery
    query={INDEPENDENT_STUDY_QUERY}
    render={({ IndependentStudyEntry }) => (
      <ContentWrapper>
        <h2>Independent Study Entries</h2>
        <GridThreeColumnContainer>
          {IndependentStudyEntry.edges.map(edge => (
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

export default IndependentStudySpring2019Page;
