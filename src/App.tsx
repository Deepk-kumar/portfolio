import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-slate-900' : 'bg-white'
    }`}>
      <Header isDark={isDark} onThemeToggle={toggleTheme} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;