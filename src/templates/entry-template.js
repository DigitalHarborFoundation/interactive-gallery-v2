import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../components/utilities/helpers';

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
      <h1>{capitalizeFirstLetter(Entries.frontmatter.title)})</h1>
      <p>Youth: {capitalizeFirstLetter(Entries.frontmatter.youth)}</p>
    </div>
  );
};

export default EntryTemplate;
