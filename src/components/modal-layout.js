import React, { Component } from 'react';
import { push, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import Layout from '../components/layout';
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
        <h1>things outside the modal</h1>
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
  max-width: 600px;
  background: papayawhip;
  padding: 0;
  overflow: auto;
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
