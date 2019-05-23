import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const activeStyles = {
  color: '#e96544',
  fontWeight: 'bold',
};

const SiteNavbar = props => (
  <SiteNavContainer>
    <SiteNavList>
      <SiteNavEntry>
        <SiteNavLinkCTA to="/submit-project">Submit a Project</SiteNavLinkCTA>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/about">
          About
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          color={props.color}
          hoverColor={props.hoverColor}
          activeStyle={activeStyles}
          to="/courses/cs-core"
        >
          CS Core
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/courses/fab-core">
          Fab Core
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/courses/independent-study">
          Independent Study
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          activeStyle={activeStyles}
          to="/courses/ccbc-digifab-cohort"
        >
          CCBC Digifab Cohort
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/courses/maker-foundations">
          Maker Foundations
        </SiteNavLink>
      </SiteNavEntry>
    </SiteNavList>
  </SiteNavContainer>
);

export default SiteNavbar;

const SiteNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem;
    width: 100%;
    padding-top: 0;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-top: 2px solid rgba(0, 0, 0, 0.3);
  }
`;

const SiteNavList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const SiteNavEntry = styled.li`
  list-style-type: none;
  display: inline;
  padding: 0 2rem;

  @media only screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 2rem;
    display: inline-block;
    width: 100%;
  }
`;

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: ${props => props.color || '#002432'};
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hoverColor || '#0091c9'};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;

const SiteNavLinkCTA = styled(SiteNavLink)`
  background: #fcece8;
  color: #e86544;
  border: 2px solid #e86544;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;
  transition: all 0.5s ease;

  &:hover {
    background: #e86544;
    border: 2px solid #e86544;
    color: #fcece8;
  }

  @media only screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;
