import React from 'react';
import styled from 'styled-components';
import heroImg from './hero-img.jpg';
import DHFHeader from '../components/dhf-header';

const Hero = () => (
  <Masthead>
    <DHFHeader />
  </Masthead>
);

export default Hero;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 16vh; */
  margin-top: 5vh;

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 145, 201, 0.3), rgba(0, 145, 201, 0.3)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
