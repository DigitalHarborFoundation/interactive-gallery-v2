import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyle';
import {
  AppWrapper,
  ContentWrapper,
  FlexRowContainer,
  FlexColumnContainer,
  ImageContainer,
} from './elements/layout-components';
import DHFFooter from './dhf-footer';
import Footer from './footer';
import CourseHeader from './course-header';

const SpringPage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper style={{ backgroundColor: '#F0F4F8', borderRadius: '5px' }}>
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <ProjectImage
        src={props.courseImage}
        alt={props.courseTitle}
        style={{
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        }}
      />
      <CardContentWrapper>
        <PageCopy>
          Now browsing {props.courseName} entries for the {props.courseSemester}{' '}
          cohort. Click on a card to read more about the project.
        </PageCopy>
        {props.children}
      </CardContentWrapper>
      <DHFFooter />
      <Footer />
    </AppWrapper>
  </React.Fragment>
);

export default SpringPage;

const ProjectImage = styled.img`
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 50%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const CardContentWrapper = styled(ContentWrapper)`
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.01);
  padding: 4rem;
  border-radius: 3px;

  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const PageCopy = styled.p`
  color: #5c5f5f;
  font-size: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    padding: 2rem;
    text-align: left;
  }
`;
