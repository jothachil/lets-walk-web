import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden border-x border-zinc-200/60 max-w-[1440px] mx-auto">
      <Navbar />
      <main className="relative z-10">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
