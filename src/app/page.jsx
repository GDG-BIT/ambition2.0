import HeroBanner from "@/components/sections/HeroBanner";
import WhatIsAmbition from "@/components/sections/WhatIsAmbition";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Perks from "@/components/sections/PrizesAndRewards";
import Gallery from "@/components/sections/Gallery";
import SponsorsSection from "@/components/sections/SponsorsSection";
import HowToParticipate from "@/components/sections/Sponsors";
import FAQs from "@/components/sections/FAQs";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import './globals.css';


export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroBanner />
      </section>
      <section id="about">
        <WhatIsAmbition />
        {/* <WhyParticipate /> */}
      </section>
      <section id="tracks">
        <Tracks />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="prizes">
        <Perks />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="participate">
        <HowToParticipate />
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
