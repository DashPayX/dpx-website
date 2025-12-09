// pages/index.tsx
import type { NextPage } from 'next';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Staking from '../components/Staking';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Staking />
      <Roadmap />
      <FAQ />
      <Community />
      <Footer />
    </>
  );
};

export default Home;

// This forces Next.js to render the page at request time (no static pre-render)
export async function getServerSideProps() {
  return {
    props: {}, // no props for now
  };
}
