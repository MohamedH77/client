import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [themeColors, setThemeColors] = useState({
    light: {
      background: '#ffffff',
      text: '#000000',
    },
    dark: {
      background: '#000000',
      text: '#ffffff',
    },
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors, setThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
