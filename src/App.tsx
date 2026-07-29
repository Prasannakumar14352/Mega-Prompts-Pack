import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModelMarquee from "./components/ModelMarquee";
import Problem from "./components/Problem";
import WhatsInside from "./components/WhatsInside";
import Bonuses from "./components/Bonuses";
import HowItWorks from "./components/HowItWorks";
import ProductPreview from "./components/ProductPreview";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

function App() {
  return (
    <div id="top" className="bg-[#070707]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main-content" className="pb-20 md:pb-0">
        <Hero />
        <ModelMarquee />
        <Problem />
        <WhatsInside />
        <Bonuses />
        <HowItWorks />
        <ProductPreview />
        <SocialProof />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
