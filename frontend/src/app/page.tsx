import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";

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
    </main>
  );
}
