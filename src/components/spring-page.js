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
    <AppWrapper>
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <ProjectImage
        src={props.courseImage}
        alt={props.courseTitle}
        style={{
          width: '50%',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        }}
      />
      <ContentWrapper>
        <p
          style={{
            color: '#5c5f5f',
            fontSize: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Now browsing {props.courseName} entries for the {props.courseSemester}{' '}
          cohort. Click on a card to read more about the project.
        </p>
        {props.children}
      </ContentWrapper>
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
`;
