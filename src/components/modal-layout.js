import React, { Component } from 'react';
import { push, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import Icon from '../components/elements/icon';

class ModalLayout extends Component {
  disableScrolling(open) {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    const { children, open, showModal, hideModal, referringPath } = this.props;

    return (
      <React.Fragment>
        <StyledDialogOverlay
          isOpen={open}
          onDismiss={() => {
            push(`/courses/${referringPath}/`);
          }}
        >
          <CloseButton
            onClick={() => {
              push(`/courses/${referringPath}/`);
            }}
          >
            <VisuallyHidden>Close</VisuallyHidden>
            <Icon color="#E96544" type="close" />
          </CloseButton>
          <StyledDialogContent>{children}</StyledDialogContent>
        </StyledDialogOverlay>
      </React.Fragment>
    );
  }
}

export default ModalLayout;

const StyledDialogOverlay = styled(DialogOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
`;

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 93.75%;
  min-height: 80vh;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 10;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  -webkit-overflow-scrolling: touch;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  transition: all ease 0.5s;
  background: transparent;
  padding: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;
