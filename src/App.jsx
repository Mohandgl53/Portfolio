import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <ThemeProvider>
      <Starfield />
      <Navbar />
      <main>
        <div className="wrap">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certificates />
          <Terminal />
          <Contact />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
