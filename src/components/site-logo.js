import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import dhfLogo from '../images/dhf-white-logo.png';

const SiteLogo = () => {
  return (
    <SiteLogoContainer>
      <SiteLogoFigure>
        <Link href="/">
          <a>
            <SiteLogoImg
              src={dhfLogo}
              alt="digital harbor foundation anchor logo"
            />
          </a>
        </Link>
      </SiteLogoFigure>
    </SiteLogoContainer>
  );
};

export default SiteLogo;

const SiteLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

const SiteLogoFigure = styled.figure`
  margin: 0px;
  padding: 0px;
  height: auto;
  width: auto;
`;

const SiteLogoImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px;
  padding: 0px;
`;
