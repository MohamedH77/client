import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationContextProvider');
  }
  return context;
};

export function NavigationContextProvider({ children }) {
  const [activePage, setActivePage] = useState('landing');

  const navigateTo = (page) => {
    console.log(`Navigating to ${page}`);
    setActivePage(page);
  };

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
