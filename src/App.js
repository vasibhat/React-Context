import React from 'react';
import { ThemeProvider } from './Compontents/Context/ThemeContext';
import ThemeToggler from './Compontents/ThemeToggler';
import ThemeDisplay from './Compontents/ThemeDisplay';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Example</h1>
        <ThemeToggler />
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
};

export default App;
