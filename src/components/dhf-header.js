import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SiteLogo from './site-logo';
import HomeNavbar from './home-navbar';

const DHFHeader = props => (
  <HeaderWrapper isSticky={props.isSticky} isTransparent={props.isTransparent}>
    <Link to="/">
      <SiteLogo />
    </Link>
    <HomeNavbar />
  </HeaderWrapper>
);

export default DHFHeader;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  width: 100%;
  ${props => props.isSticky && 'position: sticky; top: 0; left:0'}
  background: ${props => (props.isTransparent ? 'transparent' : '#0091c9')};
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1000px) {
  }
`;
const DHFTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 400;
  color: #e5f8ff;
  margin-bottom: 6vh;

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;
