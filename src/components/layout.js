import React from 'react';
import PropTypes from 'prop-types';
import { navigate, PageRenderer } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import { ImageCard } from '../components/elements/cards';
import ModalContainer from '../components/modal-container';

class Layout extends React.Component {
  render() {
    if (this.props.modalRender) {
      return (
        <>
          <PageRenderer location={{ pathname: `/courses/cs-core/` }} />
          <ModalContainer referringPath={this.props.referringPath}>
            <h1>{this.props.data.Entries.frontmatter.title}</h1>
            <p>Referring path: {this.props.referringPath}</p>
          </ModalContainer>
        </>
      );
    }
    if (this.props.modalRender === false) {
      return (
        <>
          <h1>NON MODAL RENDER</h1>
          <h2>TEST</h2>
        </>
      );
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
