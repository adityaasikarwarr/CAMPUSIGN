import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Technology from "@/components/landing/Technology";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main
      className="
relative
overflow-hidden
bg-[#f5f1e9]
"
    >
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Technology />

      <CTA />
    </main>
  );
}
