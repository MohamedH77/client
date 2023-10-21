import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationContextProvider from './component/context/NavigationContext'
import ThemeContextProvider from './component/context/ThemeContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <NavigationContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NavigationContextProvider> 
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
