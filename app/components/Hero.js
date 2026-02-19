import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center px-6 lg:flex-row lg:items-center lg:justify-between lg:px-20">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl animate-fade-in-up-delay-2">
          Every step counts
        </h1>
        <p className="mt-1 max-w-lg text-lg leading-relaxed text-zinc-500 mx-auto lg:mx-0 animate-fade-in-up-delay-3">
          Track your walks, monitor your health, and build habits that last.
          A beautifully simple way to stay active, every day.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up-delay-4">
          <a
            href="#download"
            className="group relative flex h-13 items-center gap-3 rounded-full px-6 font-medium text-white transition-all duration-300 bg-gradient-to-b from-[#FF5A1A] to-[#E02800] border border-[#FF7032] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_#CC1C02] hover:from-[#FF6A2E] hover:to-[#E53500] hover:shadow-[0_4px_8px_rgba(255,46,0,0.2),0_0_0_1px_#CC1C02]"
          >
            <Image
              src="/apple-icon.svg"
              alt="Apple"
              width={20}
              height={20}
            />
            Download for iOS
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 lg:right-24 xl:right-48 animate-fade-in-up-delay-3">
        <Image
          src="/hero.png"
          alt="Let's Walk app showing step tracking, health metrics, and walk trends"
          width={2354}
          height={2188}
          priority
          className="relative max-h-[85vh] w-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
}
