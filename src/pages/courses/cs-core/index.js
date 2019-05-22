import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../../../components/globalStyle';
import {
  AppWrapper,
  ContentWrapper,
} from '../../../components/elements/layout-components';
import heroImg from '../../../images/cs-core-hero.jpg';
import DHFFooter from '../../../components/dhf-footer';
import Footer from '../../../components/footer';
import SEO from '../../../components/seo';

const CSCorePage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Masthead>
      <ContentWrapper>
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
          <Link to="/courses/cs-core/2019spring">Spring 2019 Cohort</Link>
        </CTAContainer>
      </ContentWrapper>
    </Masthead>
  </React.Fragment>
);

export default CSCorePage;

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 145, 201, 0.3), rgba(0, 145, 201, 0.3)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CourseTitle = styled.h2`
  color: #fafafa;
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
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
  }
`;

const FlexLink = styled(Link)`
  flex: 1 0 45%;
  padding: 0 1rem 1rem;
`;
