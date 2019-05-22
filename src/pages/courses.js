import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import {
  AppWrapper,
  ContentWrapper,
  FlexRowContainer,
  FlexColumnContainer,
  GridThreeColumnContainer,
  ImageContainer,
} from '../components/elements/layout-components';
import { ImageCard } from '../components/elements/cards';
import DHFFooter from '../components/dhf-footer';
import Footer from '../components/footer';
import CourseHeader from '../components/course-header';
import csHeroImg from '../images/cs-core-hero.jpg';
import fabHeroImg from '../images/fab-core-hero.jpg';
import indHeroImg from '../images/independent-study-hero.jpg';
import ccbcHeroImg from '../images/ccbc-hero.jpg';
import makerFoundationsHero from '../images/hero-img.jpg';

const CourseLandingPage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <CourseHeader siteTitle="DHF Interactive Gallery" />
      <ContentWrapper>
        <p
          style={{ color: '#5c5f5f', fontSize: '2rem', paddingBottom: '2rem' }}
        >
          {' '}
          There are currently five courses for the current semester. Click on a
          card to navigate to the individual course page, or use the links in
          the site's header.
        </p>
        <GridThreeColumnContainer>
          <Link to="/courses/cs-core" style={{ textDecoration: 'none' }}>
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={csHeroImg}
                  alt="CS Core"
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
                  CS Core
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
          <Link to="/courses/fab-core" style={{ textDecoration: 'none' }}>
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={fabHeroImg}
                  alt="Fab Core"
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
                  Fab Core
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
          <Link to="/courses/independent-study" style={{ textDecoration: 'none' }}>
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={indHeroImg}
                  alt="Independent Study"
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
                  Independent Study
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
          <Link to="/courses/ccbc-digifab-cohort" style={{ textDecoration: 'none' }}>
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={ccbcHeroImg}
                  alt="CCBC Digifab Cohort"
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
                  CCBC Digifab Cohort
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
          <Link to="/courses/maker-foundations" style={{ textDecoration: 'none' }}>
            <ImageCard animated>
              <ImageContainer>
                <ProjectImage
                  src={makerFoundationsHero}
                  alt="Maker Foundations"
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
                  Maker Foundations
                </p>
              </FlexColumnContainer>
            </ImageCard>
          </Link>
        </GridThreeColumnContainer>
      </ContentWrapper>
      <DHFFooter />
      <Footer />
    </AppWrapper>
  </React.Fragment>
);

export default CourseLandingPage;

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
