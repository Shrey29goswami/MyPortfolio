import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import CoCurricular from './components/CoCurricular';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
      setIsTransitioning(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-magic-purple border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
          darkMode ? 'dark' : 'light'
        } ${isTransitioning ? 'pointer-events-none' : ''}`}
      >
        {/* Magic transition overlay */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 100 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-[9999] bg-gradient-to-r from-magic-purple via-magic-pink to-magic-blue rounded-full"
              style={{
                transformOrigin: 'center',
              }}
            />
          )}
        </AnimatePresence>

        {/* Magic particles for theme transition */}
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-magic-purple to-magic-pink rounded-full"
            />
          ))}
        </div>

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <CoCurricular />
          <Contact />
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;