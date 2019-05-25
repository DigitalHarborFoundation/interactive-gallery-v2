import React from 'react';
import { Link } from 'gatsby';
import { GlobalStyle } from '../components/globalStyle';
import Layout from '../components/layout';
import CourseHeader from '../components/course-header';
import {
  ModalWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from '../components/elements/layout-components';
import { SolidButton } from '../components/elements/buttons';
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
import { CSCoreSpring2019TOC } from '../config';

const EntryDetails = props => {
  const { data } = props;
  const { modalRender } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <Layout
        data={props.data}
        modalRender={props.modalRender}
        referringPath={`${props.data.Entries.frontmatter.course}/${
          props.data.Entries.frontmatter.semester
        }`}
      >
        <PageWrapper>
          <ProjectModalCard style={{ maxHeight: '80%' }}>
            <ProjectImageContainer>
              <ProjectImage
                fluid={
                  props.data.Entries.frontmatter.image.childImageSharp.fluid
                }
                alt={props.data.Entries.frontmatter.title}
              />
            </ProjectImageContainer>
            <div style={{ width: '100%', overflowY: 'scroll' }}>
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
                  {capitalizeFirstLetter(data.Entries.frontmatter.title)}
                </h2>
                <FlexRowContainer marginAll="0">
                  <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                    {capitalizeFirstLetter(
                      props.data.Entries.frontmatter.youth
                    )}
                  </p>
                  <Separator
                    color="#5c5f5f"
                    fontSize="2rem"
                    paddingLeft="1rem"
                    paddingRight="1rem"
                  />
                  <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                    {transformSemester(props.data.Entries.frontmatter.semester)}
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
                  dangerouslySetInnerHTML={{ __html: props.data.Entries.html }}
                />
              </FlexColumnContainer>
            </div>
            {!modalRender && (
              <div style={{ padding: '2rem' }}>
                <Link
                  to={`/courses/${props.data.Entries.frontmatter.course}/${
                    props.data.Entries.frontmatter.semester
                  }`}
                >
                  <SolidButton>Back to course page</SolidButton>
                </Link>
              </div>
            )}
          </ProjectModalCard>
        </PageWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default EntryDetails;

const ProjectModalCard = styled(ModalCard)`
  background: #ffffff;
  width: 93.75%;
  margin-top: 5vh;
  min-height: 80vh;
`;

const ProjectImageContainer = styled(ModalImageContainer)`
  margin: 1rem auto;
  width: 93.75%;
  padding-left: 4rem;
  padding-top: 10rem;
  @media only screen and (max-width: 1000px) {
    width: 100%;

    padding: 0;
  }
`;

const ProjectImage = styled(Img)`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 1000px) {
    max-height: 50%;
  }
`;

const PageWrapper = styled(ModalWrapper)`
  margin: 0 auto;
  background: #f0f4f8;
`;
