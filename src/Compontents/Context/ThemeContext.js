import React, { createContext, useState, useContext } from 'react';

// Create a context object
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the theme preference
  const [theme, setTheme] = useState('light');

  return (
    // Provide the theme value to its children
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);
