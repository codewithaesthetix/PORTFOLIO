// src/components/ThemeToggle.jsx
import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="theme-toggle">
      {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;
