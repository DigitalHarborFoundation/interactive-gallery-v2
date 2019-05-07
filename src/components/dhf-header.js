import { Link } from 'gatsby';

import React from 'react';
import styled from 'styled-components';

const DHFHeader = () => (
  <LogoWrapper>
    <DHFTitle>
      <Link to="/">Digital Harbor Foundation</Link>
    </DHFTitle>
  </LogoWrapper>
);

export default DHFHeader;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 42, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  @media only screen and (max-width: 1000px) {
  }
`;

const DHFTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 300;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
