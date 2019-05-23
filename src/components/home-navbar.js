import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const activeStyles = {
  color: '#e96544',
  fontWeight: 'bold',
};

const HomeNavbar = props => (
  <SiteNavContainer>
    <SiteNavList>
      <SiteNavEntry>
        <SiteNavLinkCTA
          color="#ffffff"
          activeStyle={activeStyles}
          to="/courses/cs-core"
        >
          Submit a Project
        </SiteNavLinkCTA>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          color="#ffffff"
          activeStyle={activeStyles}
          to="/courses/cs-core"
        >
          About
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          color="#ffffff"
          activeStyle={activeStyles}
          to="/courses/cs-core"
        >
          About
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          color="#ffffff"
          activeStyle={activeStyles}
          to="/courses/cs-core"
        >
          About
        </SiteNavLink>
      </SiteNavEntry>
    </SiteNavList>
  </SiteNavContainer>
);

export default HomeNavbar;

const SiteNavContainer = styled.div`
  display: flex;
  flex-direction: row;

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
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hoverColor || '#002432'};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;

const SiteNavLinkCTA = styled(SiteNavLink)`
  background: #002432;
  color: #e5f8ff;
  border-radius: 10px;
  padding: 16px;
  transition: all 0.5s ease;

  &:hover {
    background: #e5f8ff;
    color: #002432;
  }
`;
