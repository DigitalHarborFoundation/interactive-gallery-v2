import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

class ModalLayout extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal();
    }
  };

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
    const { children, open, showModal, hideModal } = this.props;

    if (typeof document !== 'undefined') {
      this.disableScrolling(open);
    }

    return (
      <>
        <Dialog isOpen={open}>
          <button onClick={showModal}>Show Modal</button>
          <button onClick={hideModal}>Close Modal</button>
          {children}
        </Dialog>
      </>
    );
  }
}

export default ModalLayout;
