import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

export const query = graphql`
  query EntryQuery($id: String!) {
    Entries: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        youth
      }
    }
  }
`;

const EntryTemplate = props => {
  const { Entries } = props.data;
  return (
    <div>
      <h1>{Entries.frontmatter.title}</h1>
      <p>
        Youth:{' '}
        {`${Entries.frontmatter.youth
          .charAt(0)
          .toUpperCase()}${Entries.frontmatter.youth.slice(1)}`}
      </p>
    </div>
  );
};

export default EntryTemplate;
