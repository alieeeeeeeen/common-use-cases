import React from 'react';

export const ThemeButton = {
  drag: {
    id: 'drag',
  },
  dragging: {
    id: 'dragging',
  }
}

export const ThemeButtonContext = React.createContext(ThemeButton.drag)