import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

export const query = graphql`
  query EntryQuery($slug: String!) {
    Entries: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;

const EntryTemplate = props => {
  const { Entries } = props.data;
  return (
    <div>
      <h1>{Entries.frontmatter.title}</h1>
      <p>FROM TEMPLATE</p>
    </div>
  );
};

export default EntryTemplate;
