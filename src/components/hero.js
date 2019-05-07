import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import heroImg from './hero-img.jpg';
import DHFHeader from '../components/dhf-header';
import { ButtonContainer } from './elements/layout-components';
import { GhostButton } from './elements/buttons';

const Hero = props => (
  <Masthead>
    <DHFHeader />
    <CTAContainer>
      <ProjectTitle>Interactive Project Gallery</ProjectTitle>
      <ProjectSubTitle>
        Click on a course to view youth projects from {props.semester}
      </ProjectSubTitle>
      <ButtonContainer>
        <GhostButton primaryColor="papayawhip" hoverColor="palevioletred">
          Test
        </GhostButton>
        <GhostButton>Test 2</GhostButton>
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
  min-height: 80vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 145, 201, 0.3), rgba(0, 145, 201, 0.3)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
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

const ProjectTitle = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: #fafafa;
  margin-bottom: 6vh;

  @media only screen and (max-width: 1000px) {
  }
`;

const ProjectSubTitle = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 5vh;
  margin-bottom: 5vh;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
  }
`;
