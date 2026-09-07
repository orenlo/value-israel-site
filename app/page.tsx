import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import HowWeWork from "@/components/HowWeWork";
import CompanyFit from "@/components/CompanyFit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1E3550] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Partners />
        <Team />
        <HowWeWork />
        <CompanyFit />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
