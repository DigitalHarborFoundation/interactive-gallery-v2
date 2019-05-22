import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, PageRenderer } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import { ModalCard, ImageCard } from '../components/elements/cards';
import ModalContainer from '../components/modal-container';
import parseURL from '../components/utilities/helpers';
import {
  ModalWrapper as PageWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from '../components/elements/layout-components';
import Img from 'gatsby-image';
import { Separator } from '../components/elements/separator';
import styled from 'styled-components';
import {
  capitalizeFirstLetter,
  transformSemester,
} from '../components/utilities/helpers';
import icon from '../components/elements/icon';
import testImg from '../images/tester-card.jpg';
import jonathanTestImg from '../images/jonathan-pi-portal-example.jpg';
// import Image from '../components/image';

class Layout extends React.Component {
  render() {
    if (this.props.modalRender) {
      return (
        <React.Fragment>
          <PageRenderer
            location={{ pathname: `/courses/${this.props.referringPath}` }}
          />
          <ModalContainer referringPath={this.props.referringPath}>
            <ProjectImageContainer>
              <ProjectImage
                fluid={
                  this.props.data.Entries.frontmatter.image.childImageSharp
                    .fluid
                }
                alt={this.props.data.Entries.frontmatter.title}
              />
            </ProjectImageContainer>
            <div
              style={{ maxHeight: '80vh', width: '100%', overflowY: 'scroll' }}
            >
              <FlexColumnContainer marginAll="0" style={{ width: '100%' }}>
                <h2
                  style={{
                    color: '#000',
                    fontSize: '3.2rem',
                    lineHeight: '2.4rem',
                    marginBottom: '0',
                    marginTop: '10vh',
                    paddingBottom: '0',
                  }}
                >
                  {capitalizeFirstLetter(
                    this.props.data.Entries.frontmatter.title
                  )}
                </h2>
                <FlexRowContainer marginAll="0">
                  <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                    {capitalizeFirstLetter(
                      this.props.data.Entries.frontmatter.youth
                    )}
                  </p>
                  <Separator
                    color="#5c5f5f"
                    fontSize="2rem"
                    paddingLeft="1rem"
                    paddingRight="1rem"
                  />
                  <p style={{ color: '#5c5f5f', fontSize: '2rem' }}>
                    {transformSemester(
                      this.props.data.Entries.frontmatter.semester
                    )}
                  </p>
                </FlexRowContainer>
                <div
                  style={{
                    maxHeight: '80vh',
                    width: '100%',
                    overflowY: 'scroll',
                  }}
                >
                  <p
                    style={{
                      color: '#2d2a2a',
                      fontSize: '2rem',
                      lineHeight: '2.6rem',
                      margin: '0 auto',
                      paddingTop: '0',
                      paddingBottom: '4rem',
                      paddingLeft: '4rem',
                      paddingRight: '4rem',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: this.props.data.Entries.html,
                    }}
                  />
                </div>
              </FlexColumnContainer>
            </div>
          </ModalContainer>
        </React.Fragment>
      );
    }
    if (this.props.modalRender === false) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const ProjectModalCard = styled(ModalCard)`
  background: #ffffff;
  width: 93.75%;
  min-height: 80vh;
`;

const ProjectImage = styled(Img)`
  max-width: 100%;
  // margin: 4rem 0;
  // display: block;
  // object-fit: fill;
  border-radius: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
`;

const ProjectImageContainer = styled(ModalImageContainer)`
  margin: auto;
  width: 93.75%;
  padding-left: 4rem;
`;
