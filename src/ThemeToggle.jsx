// ThemeToggle.jsx
import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {/* Sun Icon */}
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011-1V2a1 1 0 10-2 0v2a1 1 0 011 1zm0 8a1 1 0 011 1v2a1 1 0 10-2 0v-2a1 1 0 011-1zm5-3a1 1 0 011 1h2a1 1 0 100-2h-2a1 1 0 01-1 1zm-8 0a1 1 0 01-1-1H2a1 1 0 100 2h2a1 1 0 011-1zm5.657-4.657a1 1 0 011.414 0L16 5.586a1 1 0 01-1.414 1.414L12.657 5.757a1 1 0 010-1.414zM5.757 12.657a1 1 0 010-1.414L7.172 10a1 1 0 011.414 1.414L7.172 13.07a1 1 0 01-1.414 0zM12.657 14.243a1 1 0 010 1.414L11.242 17a1 1 0 11-1.414-1.414l1.415-1.415a1 1 0 011.414 0zM5.757 7.343a1 1 0 010 1.414L4.343 10a1 1 0 11-1.414-1.414L4.343 7.343a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {/* Moon Icon */}
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z" />
        </svg>
      )}
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
