// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
      <div>
        <Link
          to="/"
          className="text-xl font-display font-bold text-gray-800 dark:text-gray-100"
        >
          Home
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/completed-albums"
          className="text-gray-800 dark:text-gray-100 hover:underline"
        >
          Completed Albums
        </Link>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
