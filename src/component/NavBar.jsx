import React from 'react';
import { NavigationContextProvider, NavigationContext } from './context/NavigationContext'; // Import the context

function NavBar() {
  const { activePage, navigateTo } = NavigationContext();

  return (
    <div>
      <nav>
        <ul>
          <li
            className={activePage === 'landing' ? 'active' : ''}
            onClick={() => navigateTo('landing')}
          >
            Home
          </li>
          <li
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => navigateTo('about')}
          >
            About Me
          </li>
          <li
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => navigateTo('contact')}
          >
            Contact
          </li>
        </ul>
      </nav>

      { "//"}
    </div>
  );
}

export default NavBar;
