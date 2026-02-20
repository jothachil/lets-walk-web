import Features from "./components/Features";
import Hero from "./components/Hero";
import MobileCTA from "./components/MobileCTA";

export default function Home() {
  return (
    <>
      <main className="relative z-10 flex-1">
        <Hero />
        <Features />
      </main>
      <MobileCTA />
    </>
  );
}
