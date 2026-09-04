import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import HowWeWork from "@/components/HowWeWork";
import CompanyFit from "@/components/CompanyFit";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2B2F34] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main className="bg-[#2B2F34]">
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
