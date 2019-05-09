import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ProjectCard from './project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from './elements/layout-components';

const ProjectCardGrid = () => (
  <ContentWrapper>
    <GridThreeColumnContainer>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </GridThreeColumnContainer>
  </ContentWrapper>
);

export default ProjectCardGrid;
