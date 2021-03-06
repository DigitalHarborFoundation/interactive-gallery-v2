import React from 'react';
import styled from 'styled-components';
import Icon from './elements/icon';

const SocialLinks = () => (
  <LinkContainer>
    <a
      href="https://www.facebook.com/DigitalHarbor"
      aria-label="Find Digital Harbor Foundation on Facebook"
      target="_blank"
      rel="nofollow noopener"
    >
      <Icon color="#E96544" type="facebook" />
    </a>

    <a
      href="https://twitter.com/DHFBaltimore"
      aria-label="Find Digital Harbor Foundation on Twitter"
      target="_blank"
      rel="nofollow noopener"
    >
      <Icon color="#E96544" type="twitter" />
    </a>
    <a
      href="https://www.youtube.com/user/DHFBaltimore"
      aria-label="Find Digital Harbor Foundation on YouTube"
      target="_blank"
      rel="nofollow noopener"
    >
      <Icon color="#E96544" type="youtube" />
    </a>
    <a
      href="https://www.flickr.com/photos/digitalharbor/"
      aria-label="Find Digital Harbor Foundation on Flickr"
      target="_blank"
      rel="nofollow noopener"
    >
      <Icon color="#E96544" type="flickr" />
    </a>
    <a
      href="https://www.instagram.com/dhfbaltimore/"
      aria-label="Find Digital Harbor Foundation on Instagram"
      target="_blank"
      rel="nofollow noopener"
    >
      <Icon color="#E96544" type="instagram" />
    </a>
  </LinkContainer>
);

export default SocialLinks;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    padding: 1rem;
  }

  path:hover {
    fill: #fafafa;
    transition: all 0.3s ease-in-out;
    pointer-events: all;
  }
`;
