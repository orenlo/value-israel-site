import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import HowWeWork from "@/components/HowWeWork";
import CompanyFit from "@/components/CompanyFit";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#161719] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Partners />
        <HowWeWork />
        <CompanyFit />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
