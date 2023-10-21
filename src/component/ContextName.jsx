// In your child component
import React from 'react';
import { useNavigationContext } from './context/NavigationContext';
import { useThemeContext } from './context/ThemeContext';

function ContextName() {
  // Access the navigation context
  const { activePage, setActivePage } = useNavigationContext();

  // Access the theme context
  const { theme, toggleTheme, themeColors, setThemeColors } = useThemeContext();

  // Log some values for demonstration
  console.log('Active Page:', activePage);
  console.log('Theme:', theme);

  
}

export default ContextName;
