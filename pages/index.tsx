// pages/index.tsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Staking from "../components/Staking";
import Roadmap from "../components/Roadmap";
import Trust from "../components/Trust";
import FAQ from "../components/FAQ";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Staking />
      <Roadmap />
      <Trust />
      <FAQ />
      <Community />
      <Footer />
    </>
  );
};

export default Home;
