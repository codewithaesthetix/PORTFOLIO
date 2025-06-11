// App.jsx
import { useState } from 'react';
import useDarkMode from './components/useDarkMode';

import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './App.css';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode(); // ✅ Single source of truth
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className={`portfolio-app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} // ✅ renamed
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
