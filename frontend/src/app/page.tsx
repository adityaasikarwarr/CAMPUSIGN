import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-semibold">CampusSign AI</h1>
      </div>
    </main>
  );
}
