import React, { Component } from 'react';
import { push, Link } from 'gatsby';
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

  // if (typeof document !== 'undefined') {
  //   this.disableScrolling(open);
  // }

  render() {
    const { children, open, showModal, hideModal, referringPath } = this.props;

    return (
      <>
        <Dialog isOpen={open}>
          <h1>HELLO</h1>
          <p>PATH: {referringPath}</p>
          <Link to={`/courses/${referringPath}/`}>
            <button>BACK</button>
          </Link>
          {children}
        </Dialog>
      </>
    );
  }
}

export default ModalLayout;
