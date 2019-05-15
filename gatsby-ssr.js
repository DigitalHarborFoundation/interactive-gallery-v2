import React from 'react';

import AppProvider from './src/context/provider';

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
