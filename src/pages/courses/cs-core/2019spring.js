import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';
import SpringPage from '../../../components/spring-page';

const CS_CORE_2019_QUERY = graphql`
  query CSCore2019Query {
    CSCore2019Entry: allMarkdownRemark(
      filter: {
        frontmatter: {
          semester: { in: ["2019spring"] }
          course: { eq: "cs-core" }
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

const CSCoreSpring2019Page = props => (
  <StaticQuery
    query={CS_CORE_2019_QUERY}
    render={({ CSCore2019Entry }) => (
      <SpringPage courseName="CS Core" courseSemester="Spring 2019">
        <ContentWrapper>
          <GridThreeColumnContainer>
            {CSCore2019Entry.edges.map(edge => (
              <ProjectCard
                course={edge.node.frontmatter.course}
                youth={edge.node.frontmatter.youth}
                semester={edge.node.frontmatter.semester}
                title={edge.node.frontmatter.title}
                image={edge.node.frontmatter.image.childImageSharp.fluid}
                location={props.location}
                key={edge.node.id}
              />
            ))}
          </GridThreeColumnContainer>
        </ContentWrapper>
      </SpringPage>
    )}
  />
);

export default CSCoreSpring2019Page;
