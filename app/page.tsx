import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}