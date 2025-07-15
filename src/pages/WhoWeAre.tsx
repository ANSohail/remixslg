
import { useEffect, useState } from "react";
import TopContactBar from "@/components/who-we-are/TopContactBar";
import Header from "@/components/who-we-are/Header";
import HeroSection from "@/components/who-we-are/HeroSection";
import TeamSection from "@/components/who-we-are/TeamSection";
import PartnersSection from "@/components/who-we-are/PartnersSection";
import AboutSection from "@/components/who-we-are/AboutSection";
import ValuesSection from "@/components/who-we-are/ValuesSection";
import CallToActionSection from "@/components/who-we-are/CallToActionSection";
import Footer from "@/components/who-we-are/Footer";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif overflow-hidden" style={{ color: '#7190a6' }}>
      <TopContactBar />
      <Header />
      <HeroSection isVisible={isVisible} />
      <TeamSection />
      <PartnersSection />
      <AboutSection />
      <ValuesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default WhoWeAre;
