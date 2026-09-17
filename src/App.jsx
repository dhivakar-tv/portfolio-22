import React from 'react';
import BackgroundDecorations from './components/BackgroundDecorations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Dynamic Background Effects & Grid */}
      <BackgroundDecorations />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}

export default App;
