// pages/index.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Staking from '../components/Staking';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Home = () => {
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

// force server-side rendering (we already used this for successful build)
export async function getServerSideProps() {
  return {
    props: {},
  };
}
