import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';
import SpringPage from '../../../components/spring-page';

const MAKER_FOUNDATIONS_QUERY = graphql`
  query MakerFoundationsQuery {
    MakerFoundationsEntry: allMarkdownRemark(
      filter: {
        frontmatter: {
          semester: { in: ["2019spring"] }
          course: { eq: "maker-foundations" }
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

const MakerFoundationsSpring2019Page = () => (
  <StaticQuery
    query={MAKER_FOUNDATIONS_QUERY}
    render={({ MakerFoundationsEntry }) => (
      <SpringPage courseName="Maker Foundations" courseSemester="Spring 2019">
        <ContentWrapper>
          <GridThreeColumnContainer>
            {MakerFoundationsEntry.edges.map(edge => (
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
      </SpringPage>
    )}
  />
);

export default MakerFoundationsSpring2019Page;
