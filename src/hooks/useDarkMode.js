import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize the state from local storage
    return localStorage.getItem('dark-mode') === 'enabled';
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode ? 'enabled' : 'disabled');
      return newMode;
    });
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;