import React from 'react';
import { useTheme } from './Context/ThemeContext';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
};

export default ThemeToggler;
