import React from 'react';

import AppProvider from './src/context/provider';

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);

export const onInitialClientRender = () => {
  window.___GALLERY_INITIAL_RENDER_COMPLETE = true;
};
