import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from './globalStyle';
import {
  FlexColumnContainer,
  ImageContainer,
} from './elements/layout-components';
import Img from 'gatsby-image';
import { ImageCard } from './elements/cards';
import testImg from '../images/tester-card.jpg';
import { useSiteMetadata } from './utilities/queries';
import { capitalizeFirstLetter, transformSemester } from './utilities/helpers';
import { CSCoreSpring2019TOC } from '../config';

const toc = CSCoreSpring2019TOC;

const ProjectCard = props => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Link
        style={{ textDecoration: 'none' }}
        to={`/courses/${props.course}/${props.semester}/${
          props.youth
        }`.toLowerCase()}
        state={{
          isModal: true,
        }}
      >
        <ImageCard animated>
          <ImageContainer>
            <ProjectImage fluid={props.image} alt={props.title} />
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
              {capitalizeFirstLetter(props.youth)}
            </p>
            <p
              style={{
                color: '#5c5f5f',
                fontSize: '2.4rem',
                fontWeight: '300',
                margin: '0',
                padding: '0',
              }}
            >
              {transformSemester(props.semester)}
            </p>
            <p>{props.currentSlug}</p>
            <p>{props.nextSlug}</p>
          </FlexColumnContainer>
        </ImageCard>
      </Link>
    </React.Fragment>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  youth: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  image: '../images/tester-card.jpg',
  youth: 'DHF Youth',
  title: 'Youth Project',
  course: 'CS Core',
  semester: 'Spring 2019',
};

export default ProjectCard;

const ProjectImage = styled(Img)`
  // border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
