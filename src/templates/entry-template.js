import React from 'react';
import { graphql } from 'gatsby';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import {
  ModalWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from '../components/elements/layout-components';
import ModalContainer from '../components/modal-container';
import Img from 'gatsby-image';
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
import EntryDetails from '../components/entry-details';

// import Image from '../components/image';

export const query = graphql`
  query EntryQuery($id: String!) {
    Entries: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        youth
        title
        course
        semester
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

class EntryTemplate extends React.Component {
  render() {
    let modalRender = false;
    const isModal = this.props.location && this.props.location.state.isModal;

    if (isModal) {
      if (
        typeof window !== 'undefined' &&
        window.___GALLERY_INITIAL_RENDER_COMPLETE
      ) {
        modalRender = true;
      }
    }
    return (
      <React.Fragment>
        <EntryDetails data={this.props.data} modalRender={modalRender} />
      </React.Fragment>
    );
  }
}

export default EntryTemplate;

const ProjectModalCard = styled(ModalCard)`
  background: #ffffff;
  width: 93.75%;
  min-height: 80vh;
`;

const ProjectImage = styled(Img)`
  max-width: 100%;
  // margin: 4rem 0;
  // display: block;
  // object-fit: fill;
  border-radius: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
`;

const ProjectImageContainer = styled(ModalImageContainer)`
  margin: auto;
  width: 93.75%;
  padding-left: 4rem;
`;
