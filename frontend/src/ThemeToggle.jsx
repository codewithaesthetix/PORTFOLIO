// src/components/ThemeToggle.jsx
import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [isDarkMode, toggleTheme] = useDarkMode();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: 'var(--button-bg)',
        color: 'var(--button-text)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;