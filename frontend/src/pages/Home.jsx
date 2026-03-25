import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Training from '../components/Training';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Skills />
      <Projects />
      <Training />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
