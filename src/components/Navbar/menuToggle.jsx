import React, { useState } from 'react';
import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';
import useDarkMode from "../../hooks/useDarkMode";

const MenuToggle = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Use useState to manage the toggle state
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button id="menu-toggle" className="rounded-lg focus:outline-none focus:shadow-outline md:hidden" aria-expanded={isOpen} aria-label="Main" aria-controls="menuItems" onClick={toggleMenu}>
        <svg id="menu-icon-closed" className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>

        <svg id="menu-icon-open" className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>

      <div id="menuItems" className={`fixed top-20 right-0 h-full w-64 bg-darkMode-primaryBackground text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="/" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}> Home </a>
          <a href="/about" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}> About </a>
          <a href="/docs" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}> Docs </a>
          <a href="https://www.patreon.com/Astrixsm" className="text-lg font-semibold hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}> Patreon </a>
          <button onClick={toggleDarkMode} type="button" className={`p-2 text-sm rounded-lg md:ml-2 focus:outline-none focus:ring-4 transition-colors duration-200 ${isDarkMode ? 'dark:bg-darkMode-primaryBackground dark:text-darkMode-inactiveText dark:hover:bg-white focus:ring-darkMode-secondaryBorder' : 'bg-darkMode-primaryBackground text-lightMode-secondaryText hover:bg-darkMode-hoverIcon focus:ring-lightMode-primaryBorder'}`}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </nav>
      </div>
    </>
  )
}

export default MenuToggle;