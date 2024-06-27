import Image from "next/image";
 
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
  <main className="main">
    
    <section>
    <Navbar/>
    </section>

  <Hero/>
  </main>
  );
}
