import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SiteLogo from './site-logo';
import HomeNavbar from './home-navbar';

const DHFHeader = () => (
  <LogoWrapper>
    <Link to="/">
      <SiteLogo />
    </Link>
    <DHFTitle>DHF Interactive Gallery</DHFTitle>
    <HomeNavbar />
  </LogoWrapper>
);

export default DHFHeader;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  padding-left: 2rem;
  width: 100%;
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1000px) {
  }
`;
const DHFTitle = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  color: #e5f8ff;
  margin-bottom: 6vh;

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;
