import React from 'react';
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
  query EntryQuery($id: String!) {
    Entries: markdownRemark(id: { eq: $id }) {
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

const EntryTemplate = props => {
  const { Entries } = props.data;
  return (
    <>
      <GlobalStyle />
      <ModalWrapper>
        <ProjectModalCard>
          <ProjectImageContainer>
            <ProjectImage src={jonathanTestImg} />
          </ProjectImageContainer>
          <div style={{ width: '100%' }}>
            <FlexColumnContainer marginAll="0" style={{ width: '100%' }}>
              <h2
                style={{
                  color: '#000',
                  fontSize: '3.2rem',
                  lineHeight: '2.4rem',
                  marginBottom: '0',
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
    </>
  );
};

export default EntryTemplate;

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
