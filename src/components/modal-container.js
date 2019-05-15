import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context/createContext';

const ModalContainer = props => {
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

export default ModalContainer;
