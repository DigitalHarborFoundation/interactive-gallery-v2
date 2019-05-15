import React, { Component } from 'react';
import { push, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

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
      <>
        <DialogOverlay
          style={{ background: 'hsla(0, 100%, 100%, 0.9' }}
          isOpen={open}
          onDismiss={() => {
            push(`/courses/${referringPath}/`);
          }}
        >
          <DialogContent
            style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}
          >
            <h1>HELLO</h1>
            <p>PATH: {referringPath}</p>
            <button
              onClick={() => {
                push(`/courses/${referringPath}/`);
              }}
            >
              CLOSE?
            </button>
            {children}
          </DialogContent>
        </DialogOverlay>
      </>
    );
  }
}

export default ModalLayout;
