import Image from "next/image";
import '@/styles/service/service.css'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SideButton from "@/components/hero/SideButton";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Donation from '@/components/donation/Donation'
import Events from "@/components/event/Events";
import Testimonial from "@/components/testimonial/Testimonial";
import Banner from "@/components/Banner/Banner";
import Poster from "@/components/Banner/Poster";
import Footer from "@/components/footer/Footer";
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
      <Donation/>
      <section className="events-section">
      <Events/>

      </section>
      <Testimonial/>
      <Banner/>
      <Poster/>
      <Footer/>
    </main>
  );
}
