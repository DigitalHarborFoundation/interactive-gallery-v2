import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import heroImg from '../images/hero-img.jpg';
import DHFHeader from '../components/dhf-header';
import { GhostButton } from './elements/buttons';

const Hero = props => (
  <Masthead>
    <DHFHeader />
    <CTAContainer>
      {/*
      <ProjectTitle>
        Digital Harbor Foundation Interactive Project Gallery
      </ProjectTitle>
    */}
      <ProjectSubTitle>
        Click on a course to view youth projects from {props.semester}
      </ProjectSubTitle>
      <ButtonContainer>
        <FlexLink to="/courses/cs-core">
          <GhostButton animated>CS Core</GhostButton>
        </FlexLink>
        <FlexLink to="/courses/fab-core">
          <GhostButton animated>Fab Core</GhostButton>
        </FlexLink>
        <FlexLink to="/courses/ccbc-digifab-cohort">
          <GhostButton animated>CCBC Digifab Cohort</GhostButton>
        </FlexLink>
        <FlexLink to="/courses/independent-study">
          <GhostButton animated>Independent Study</GhostButton>
        </FlexLink>
        <FlexLink to="/courses/maker-foundations">
          <GhostButton animated>Maker Foundations</GhostButton>
        </FlexLink>
      </ButtonContainer>
    </CTAContainer>
  </Masthead>
);

Hero.propTypes = {
  semester: PropTypes.node.isRequired,
};

Hero.defaultProps = {
  semester: 'Spring 2019',
};

export default Hero;

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

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin-top: 10vh;
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

const ProjectTitle = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  color: #e5f8ff;
  margin-bottom: 6vh;

  @media only screen and (max-width: 1000px) {
  }
`;

const ProjectSubTitle = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 3vh;
  margin-bottom: 5vh;
  color: #e5f8ff;
  @media only screen and (max-width: 1000px) {
  }
`;

const FlexLink = styled(Link)`
  flex: 1 0 45%;
  padding: 0 1rem 1rem;
`;
