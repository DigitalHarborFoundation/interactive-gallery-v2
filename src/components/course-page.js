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
            width: '50%',
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
        <div style={{ maxWidth: '33%' }}>
          <Link
            to={`/courses/${props.coursePath}/2019spring`}
            style={{ textDecoration: 'none' }}
          >
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={props.courseImage}
                  alt={`${props.courseName} hero image`}
                  style={{ width: '100%' }}
                />
              </ImageContainer>
              <FlexColumnContainer marginAll="4rem 0">
                <p
                  style={{
                    color: '#000',
                    fontSize: '3.2rem',
                    margin: '0',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {props.courseSemester}
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
        </div>
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
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7rem;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;

const MainContent = styled.main`
  min-height: 60vh;
`;

const ProjectImage = styled.img`
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
