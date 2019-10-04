import React from 'react';
import {useDarkMode} from './useDarkMode'

const Dark = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>PLAYERS</h1>
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div className={darkMode ? 'toggle toggled' : 'toggle'}/>
      </div>
    </nav>
  );
};

export default Dark;

