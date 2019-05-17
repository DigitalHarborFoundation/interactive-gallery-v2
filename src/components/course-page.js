import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import qs from 'qs';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

export const COURSE_PAGE_QUERY = graphql`
  query CoursePageQuery($course: String!) {
    CoursePageEntry: allMarkdownRemark(
      filter: { frontmatter: { course: { eq: $course } } }
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
                fluid(maxWidth: 500, maxHeight: 400, quality: 100) {
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

const CoursePage = ({ props, data }) => (
  <Layout location={props.location} modalRender={false}>
    <ContentWrapper>
      <h2>CS Core Entries</h2>
      <h3>LOCATION: {props.location}</h3>
      <GridThreeColumnContainer>
        {CoursePageEntry.edges.map(edge => (
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
  </Layout>
);

export default CoursePage;
