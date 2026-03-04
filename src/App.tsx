import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Objectives from './components/Objectives';
import Methodology from './components/Methodology';
import DataCollection from './components/DataCollection';
import Outcomes from './components/Outcomes';
import Status from './components/Status';
import Challenges from './components/Challenges';
import Demo from './components/Demo';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Objectives />
      <Methodology />
      <DataCollection />
      <Outcomes />
      <Status />
      <Challenges />
      <Demo />
      <Team />
      <Footer />
    </div>
  );
}
