import React from 'react';
import { graphql } from 'gatsby';
import { GlobalStyle } from '../components/globalStyle';
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
    const { Entries } = this.props.data;
    let isModal = false;

    if (
      typeof window !== 'undefined' &&
      window.___GALLERY_INITIAL_RENDER_COMPLETE
    ) {
      isModal = true;
    }

    return (
      <>
        <GlobalStyle />
        {isModal ? (
          <ModalContainer referringPath={Entries.frontmatter.course} />
        ) : (
          <ModalWrapper>
            <ProjectModalCard>
              <ProjectImageContainer>
                <ProjectImage
                  fluid={Entries.frontmatter.image.childImageSharp.fluid}
                  alt={Entries.frontmatter.title}
                />
              </ProjectImageContainer>
              <div style={{ width: '100%' }}>
                <FlexColumnContainer marginAll="0" style={{ width: '100%' }}>
                  <h2
                    style={{
                      color: '#000',
                      fontSize: '3.2rem',
                      lineHeight: '2.4rem',
                      marginBottom: '0',
                      marginTop: '10vh',
                      paddingBottom: '0',
                    }}
                  >
                    {capitalizeFirstLetter(Entries.frontmatter.title)}
                  </h2>
                  <FlexRowContainer marginAll="0">
                    <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                      {capitalizeFirstLetter(Entries.frontmatter.youth)}
                    </p>
                    <Separator
                      color="#5c5f5f"
                      fontSize="2rem"
                      paddingLeft="1rem"
                      paddingRight="1rem"
                    />
                    <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                      {transformSemester(Entries.frontmatter.semester)}
                    </p>
                  </FlexRowContainer>
                  <p
                    style={{
                      color: '#2d2a2a',
                      fontSize: '2rem',
                      lineHeight: '2.6rem',
                      margin: '0 auto',
                      paddingTop: '0',
                      paddingBottom: '4rem',
                      paddingLeft: '4rem',
                      paddingRight: '4rem',
                    }}
                    dangerouslySetInnerHTML={{ __html: Entries.html }}
                  />
                </FlexColumnContainer>
              </div>
            </ProjectModalCard>
          </ModalWrapper>
        )}
      </>
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
