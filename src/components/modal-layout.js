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
          style={{
            position: `fixed`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.75)`,
          }}
          isOpen={open}
          onDismiss={() => {
            push(`/courses/${referringPath}/`);
          }}
        >
          <DialogContent
            style={{
              maxWidth: '600px',
              background: 'red',
              padding: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            }}
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
