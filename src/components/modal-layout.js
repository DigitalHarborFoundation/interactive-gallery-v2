import React from 'react';
import { navigate, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { GlobalStyle } from './globalStyle';
import {
  ModalWrapper,
  ModalImageContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from './elements/layout-components';
import { ModalCard } from './elements/cards';
import { Separator } from './elements/separator';
import styled from 'styled-components';
import { capitalizeFirstLetter, transformSemester } from './utilities/helpers';
import icon from './elements/icon';
import testImg from '../images/tester-card.jpg';
import jonathanTestImg from '../images/jonathan-pi-portal-example.jpg';
// import Image from '../components/image';

const ModalLayout = props => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: 'center',
        width: '80%',
      }}
    >
      {props.children}
      <button
        onClick={() =>
          navigate(`${props.closeTo}`, { state: { noScroll: true } })
        }
        style={{
          cursor: `pointer`,
          fontSize: `30px`,
        }}
      >
        [ X ]
      </button>
    </div>
  );
};

export default ModalLayout;
