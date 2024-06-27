import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SideButton from "@/components/hero/SideButton";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="main">

      <section className="hero-nav" > 
        <Navbar />
        <Hero />
      </section>
      <SideButton />
      <About/>
    </main>
  );
}
