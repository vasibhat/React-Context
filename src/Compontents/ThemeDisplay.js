import React from 'react';
import { useTheme } from './Context/ThemeContext';

const ThemeDisplay = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Current Theme</h2>
      <p>The theme is: {theme}</p>
    </div>
  );
};

export default ThemeDisplay;
