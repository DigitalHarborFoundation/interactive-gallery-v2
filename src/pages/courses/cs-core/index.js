import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../../../components/globalStyle';
import {
  AppWrapper,
  ContentWrapper,
  FlexRowContainer,
  FlexColumnContainer,
  ImageContainer,
} from '../../../components/elements/layout-components';
import heroImg from '../../../images/cs-core-hero.jpg';
import { ImageCard } from '../../../components/elements/cards';
import DHFFooter from '../../../components/dhf-footer';
import Footer from '../../../components/footer';
import CourseHeader from '../../../components/course-header';
import SEO from '../../../components/seo';

const CSCorePage = () => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <HeaderFlexRowContainer>
        <img src={heroImg} style={{ width: '50%' }} />
        <CTAContainer>
          <SEO title="CS Core" keywords={[`gatsby`, `application`, `react`]} />
          <CourseTitle>CS Core</CourseTitle>
          <CourseDescription>
            CS Core is an introduction to the fundamentals of programming. This
            course is focused on building a solid foundation through projects
            and examples of best practices. Youth will learn programming skills
            through modern JavaScript and the p5.js library. There is a focus on
            creating interactive web experiences and core skills that will lead
            into future computer science courses. This course is the first in
            our Computer Science Pathway and is a prerequisite to following
            courses.
          </CourseDescription>
        </CTAContainer>
      </HeaderFlexRowContainer>
      <ContentWrapper>
        <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
          Currently, there are gallery entries for the Spring 2019 Cohort. Click
          below to browse the entries.
        </p>
        <div style={{ maxWidth: '33%' }}>
          <Link
            to="/courses/cs-core/2019spring"
            style={{ textDecoration: 'none' }}
          >
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={heroImg}
                  alt="CS Core hero image"
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
                  Spring 2019 Cohort
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

export default CSCorePage;

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
  line-height: 2.6rem;
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
`;

const MainContent = styled.main`
  min-height: 60vh;
`;

const ProjectImage = styled.img`
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
