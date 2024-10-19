// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaYoutube } from 'react-icons/fa'; // Import the YouTube icon

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
      {/* Left side navigation */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-xl font-display font-bold text-gray-800 dark:text-gray-100"
        >
          Home
        </Link>
        <a
          href="https://warpcast.com/~/channel/now-playing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-display font-bold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Warpcast Channel
        </a>
        <Link
          to="/completed-albums"
          className="text-xl font-display font-bold text-gray-800 dark:text-gray-100 hover:underline"
        >
          Curated Albums
        </Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        {/* YouTube Channel Link */}
        <a
          href="https://www.youtube.com/@10SongAlbumGame"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 dark:text-red-500 hover:text-red-700"
          aria-label="YouTube Channel"
        >
          <FaYoutube size={24} />
        </a>

        {/* Theme Toggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
