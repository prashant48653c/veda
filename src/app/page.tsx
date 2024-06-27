import Image from "next/image";
import '@/styles/service/service.css'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SideButton from "@/components/hero/SideButton";
import About from "@/components/about/About";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main className="main">

      <section className="hero-nav" > 
        <Navbar />
        <Hero />
      </section>
      <SideButton />
      <About/>
      <section className="section-service">
      <Service/>

      </section>
    </main>
  );
}
