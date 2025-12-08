import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Staking from '../components/Staking';
import Community from '../components/Community';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Staking />
      <Community />
      <FAQ />
      <Footer />
    </>
  );
}