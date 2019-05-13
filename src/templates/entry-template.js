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
import testImg from '../images/tester-card.jpg';

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
        <ModalCard>
          <ModalImageContainer>
            <ProjectImage src={testImg} />
          </ModalImageContainer>
          <FlexColumnContainer marginAll="0" style={{ width: '80%' }}>
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
                padding: '4rem 4rem',
              }}
              dangerouslySetInnerHTML={{ __html: Entries.html }}
            />
          </FlexColumnContainer>
        </ModalCard>
      </ModalWrapper>
    </>
  );
};

export default EntryTemplate;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: block;
  object-fit: fill;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25);
`;
