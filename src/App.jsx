import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Offer from './components/Offer.jsx';
import WhyUs from './components/WhyUs.jsx';
import HowToBuy from './components/HowToBuy.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Offer />
        <WhyUs />
        <HowToBuy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}