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
import DHFHeader from '../components/dhf-header';
import heroImg from '../images/hero-img.jpg';
import SEO from '../components/seo';

const ContactPage = props => (
  <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <Masthead>
        <DHFHeader isTransparent />

        <StyledContentWrapper>
          <CTAContainer>
            <CTACopy>
              If you're interested in submitting an entry and haven't yet,
              you're still able to do so!
            </CTACopy>
            <CTACopy>Log in to your DHF youth email.</CTACopy>
            <CTACopy>
              Click on this link:{' '}
              <a
                style={{ textDecoration: 'none', color: '#e96544' }}
                href="https://dhf.io/galleryentry"
              >
                dhf.io/galleryentry
              </a>
            </CTACopy>
            <CTACopy>
              Answer the questions and upload a project photo. Once your project
              is reviewed it will be added to the gallery!
            </CTACopy>
          </CTAContainer>
        </StyledContentWrapper>
      </Masthead>
      <DHFFooter />
      <Footer />
    </AppWrapper>
  </React.Fragment>
);

export default ContactPage;

const StyledContentWrapper = styled(ContentWrapper)`
max-width: 50%;
@media only screen and (max-width: 1000px) {
max-width: 100%;
`;

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(rgba(0, 145, 201, 0.6), rgba(0, 145, 201, 0.2)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

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
  /* align-items: center; */
  margin-top: 5vh;
  /* border: 1px solid #e5f8ff; */
  border-radius: 10px;
  padding: 1rem 4rem;
  background: rgba(0, 0, 0, 0.4);
  /* background: #e5f8ff; */
  /* background: rgba(229, 248, 255, 0.6); */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  @media only screen and (max-width: 1000px) {
    text-align: left;
  }
`;

const CTACopy = styled.p`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 3vh;
  margin-bottom: 5vh;
  color: #e5f8ff;
  /* color: #002432; */
  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: bolder;
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
