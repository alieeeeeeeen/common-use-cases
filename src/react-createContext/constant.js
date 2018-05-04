import React from 'react';

export const theme = {
  light: {
    'background-color': '#0D47A1'
  },
  red: {
    'background-color': '#B71C1C'
  }
};

export const ThemeContext = React.createContext(
  theme.red
);
