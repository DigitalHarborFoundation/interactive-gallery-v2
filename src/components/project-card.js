import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  FlexColumnContainer,
  ImageContainer,
} from '../components/elements/layout-components';
import { ImageCard } from '../components/elements/cards';
import testImg from '../images/tester-card.jpg';

const ProjectCard = () => (
  <ImageCard animated>
    <ImageContainer>
      <ProjectImage src={testImg} />
    </ImageContainer>
    <FlexColumnContainer marginAll="4rem 0">
      <p
        style={{ color: '#000', fontSize: '3.2rem', margin: '0', paddingBottom: '0.25rem' }}
      >
        Jonathan
      </p>
      <p style={{color: '#5c5f5f', fontSize: '2.4rem', fontWeight: '300', margin: '0', padding: '0'  }}>Spring 2019</p>
    </FlexColumnContainer>
  </ImageCard>
);

export default ProjectCard;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
