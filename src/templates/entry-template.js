import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';

const LessonContent = props => {
  const { LessonItems } = props.data;
  return (
    <LessonContainer>
      <SEO
        title={`Pi Portal: ${LessonItems.frontmatter.title}`}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <LessonTitle>{LessonItems.frontmatter.title} </LessonTitle>
      <LessonBody dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
    </LessonContainer>
  );
};

export default LessonContent;

export const query = graphql`
  query LessonQuery($slug: String!) {
    LessonItems: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const LessonTitle = styled.h1``;

const LessonContainer = styled.main`
  flex-grow: 1;
  min-height: 100vh;
  max-width: 900px;
  margin-top: 0;
  margin-bottom: 2.2rem;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.01);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 2rem;
  grid-area: content;
  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 1300px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const LessonBody = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  img {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important;
  }

  img:hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
      rgba(39, 44, 49, 0.04) 1px 6px 12px !important;
  }

  a {
    color: #63686b;

    text-decoration: underline;
    transition: color 0.5s ease;
  }

  a:hover {
    color: #000000;
    border-bottom: none;
    transition: color 0.5s ease;
  }

  li {
    line-height: 1.42rem;
  }
  p {
    font-size: 1rem;
  }
`;
