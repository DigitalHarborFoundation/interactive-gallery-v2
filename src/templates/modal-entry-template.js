import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { GlobalStyle } from '../components/globalStyle';
import {
  ModalWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from '../components/elements/layout-components';
import { ModalCard } from '../components/elements/cards';
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

// hook recipe from https://usehooks.com/useKeyPress!

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function keyDownHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function keyUpHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);
  return keyPressed;
}

export const query = graphql`
  query ModalEntryQuery($id: String!) {
    ModalEntries: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        youth
        title
        course
        semester
      }
    }
  }
`;

const ModalEntryTemplate = props => {
  const { ModalEntries } = props.data;
  const escPress = useKeyPress('Escape');
  const testPress = useKeyPress('t');

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal && (
            <>
              <Link to={closeTo} state={{ noScroll: true }}>
                Close
              </Link>
              <div>
                <p>{ModalEntries.frontmatter.title}</p>
                <p>{testPress && '🦄'}</p>
              </div>
            </>
          )}
          <Link to="/">Go home!</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default ModalEntryTemplate;
