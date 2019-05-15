import React from 'react';
import { Consumer } from '../context/createContext';
import ModalLayout from './modal-layout';

const ModalContainer = ({ children }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <ModalLayout open={open} showModal={showModal} hideModal={hideModal}>
        {children}
      </ModalLayout>
    )}
  </Consumer>
);

export default ModalContainer;
