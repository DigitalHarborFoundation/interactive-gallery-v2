import React from 'react';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { graphql } from 'gatsby';
import { GlobalStyle } from '../components/globalStyle';
import {
  ModalWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from '../components/elements/layout-components';
import { ModalCard } from '../components/elements/cards';
import { Separator } from '../components/elements/separator';
import styled from 'styled-components';
import {
  capitalizeFirstLetter,
  transformSemester,
} from '../components/utilities/helpers';
import icon from '../components/elements/icon';
import testImg from '../images/tester-card.jpg';
import jonathanTestImg from '../images/jonathan-pi-portal-example.jpg';
// import Image from '../components/image';

export const query = graphql`
  query ModalEntryQuery($id: String!) {
    ModalEntries: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        youth
        title
        course
        semester
      }
    }
  }
`;

const ModalEntryTemplate = props => {
  const { ModalEntries } = props.data;
  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to={closeTo}>Close</Link>
          ) : (
            <div>
              <h1>MODAL TEST</h1>
              <p>{ModalEntries.frontmatter.title}</p>
            </div>
          )}

          <h2>MODAL PAGE</h2>
          <Link to="/">Go home!</Link>
        </div>
      )}
    </ModalRoutingContext>
  );
};

export default ModalEntryTemplate;
