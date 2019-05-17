import React from 'react';
import PropTypes from 'prop-types';
import { navigate, PageRenderer } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import { ImageCard } from '../components/elements/cards';
import ModalContainer from '../components/modal-container';
import parseURL from '../components/utilities/helpers';

class Layout extends React.Component {
  render() {
    if (this.props.modalRender) {
      return (
        <React.Fragment>
          <PageRenderer
            location={{ pathname: `/courses/${this.props.referringPath}` }}
          />
          <ModalContainer referringPath={this.props.referringPath}>
            <h1>{this.props.data.Entries.frontmatter.title}</h1>
          </ModalContainer>
        </React.Fragment>
      );
    }
    if (this.props.modalRender === false) {
      return <>{this.props.children}</>;
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
