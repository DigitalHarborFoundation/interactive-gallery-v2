import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { useKeyPress } from '../components/utilities/hooks';
import { Consumer } from '../context/createContext';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
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
import ModalLayout from '../components/modal-layout';
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
  const escPress = useKeyPress('Escape');
  const testPress = useKeyPress('t');
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) =>
        modal ? (
          <ModalLayout location={location}>{props.children}</ModalLayout>
        ) : (
          <div>
            <h1>NOT MODAL</h1>
          </div>
        )
      }
    </ModalRoutingContext.Consumer>
  );
};

export default ModalEntryTemplate;

const ProjectModalCard = styled(ModalCard)`
  background: #ffffff;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  margin: 4rem 0;
  display: block;
  object-fit: fill;
  border-radius: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
`;

const ProjectImageContainer = styled(ModalImageContainer)`
  margin: auto;
  width: 93.75%;
  padding-left: 4rem;
`;
