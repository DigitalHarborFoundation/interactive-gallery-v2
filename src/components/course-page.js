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
import Img from 'gatsby-image';
import Image from './image';
import { ImageCard } from './elements/cards';
import DHFFooter from './dhf-footer';
import Footer from './footer';
import CourseHeader from './course-header';
import SEO from './seo';

const CoursePage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper style={{ backgroundColor: '#F0F4F8' }}>
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <HeaderFlexRowContainer>
        <ProjectImage
          src={props.courseImage}
          alt={props.courseTitle}
          style={{
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
          }}
        />
        <CTAContainer>
          <SEO
            title={props.courseTitle}
            keywords={[`gatsby`, `application`, `react`]}
          />
          <CourseTitle>{props.courseTitle}</CourseTitle>
          <CourseDescription>{props.courseDescription}</CourseDescription>
        </CTAContainer>
      </HeaderFlexRowContainer>
      <ContentWrapper
        style={{
          background: '#ffffff',
          boxShadow:
            '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.01)',
          padding: '4rem',
          borderRadius: '3px',
        }}
      >
        <p
          style={{ color: '#5c5f5f', fontSize: '2rem', paddingBottom: '2rem' }}
        >
          Currently, there are gallery entries for the Spring 2019 Cohort. Click
          below to browse the entries.
        </p>
        <ProjectWrapper>
          <Link
            to={`/courses/${props.coursePath}/2019spring`}
            style={{ textDecoration: 'none' }}
          >
            <ImageCard style={{ width: '100%' }} animated>
              <ResponsiveImageContainer>
                <ProjectImage
                  src={props.courseImage}
                  alt={`${props.courseName} hero image`}
                  style={{ width: '100%' }}
                />
              </ResponsiveImageContainer>
              <FlexColumnContainer marginAll="4rem 0">
                <CardTitle>{props.courseSemester}</CardTitle>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
        </ProjectWrapper>
      </ContentWrapper>
      <DHFFooter />
      <Footer />
    </AppWrapper>
  </React.Fragment>
);

export default CoursePage;

const CourseTitle = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 6vh;
  @media only screen and (max-width: 1000px) {
    margin-bottom: 1vh;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  @media only screen and (max-width: 1000px) {
    text-align: center;
    margin-top: 1vh;
  }
`;

const CourseDescription = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  @media only screen and (max-width: 1000px) {
    text-align: left;
  }
`;

const FlexLink = styled(Link)`
  flex: 1 0 45%;
  padding: 0 1rem 1rem;
`;

const HeaderFlexRowContainer = styled(FlexRowContainer)`
  align-items: center;
  background: #002432;
  color: #e5f8ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  min-height: 60vh;
`;

const ProjectImage = styled.img`
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 50%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ResponsiveImageContainer = styled(ImageContainer)`
  width: 100%;
`;

const ProjectWrapper = styled.div`
  max-width: 33%;
  @media only screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.p`
  color: #000;
  font-size: 3.2rem;
  margin: 0;
  padding-bottom: 0.25rem;

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    padding-bottom: 0;
  }
`;
