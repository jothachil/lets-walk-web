import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function Hero() {
  return (
    <section className="flex lg:min-h-[calc(100vh-68px)] flex-col items-center justify-start pt-10 sm:pt-16 lg:pt-0 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-20">
      <div className="relative z-10 max-w-xl text-center lg:text-left">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl ">
          Every step counts
        </h1>
        <p className="mt-1 max-w-[436px] text-base sm:text-lg leading-relaxed text-zinc-500 mx-auto lg:mx-0 line-clamp-3">
          Track your walks, monitor your health, and build habits that last. A
          beautifully simple way to stay active, every day.
        </p>
        <div className="mt-8 hidden lg:flex flex-col items-center gap-4 sm:flex-row lg:justify-start ">
          <DownloadButton />
        </div>
      </div>

      {/* Mobile/tablet: static image below content */}
      <div className="mt-8 -ml-8 lg:hidden ">
        <Image
          src="/hero.png"
          alt="StepUP app showing step tracking, health metrics, and walk trends"
          width={2354}
          height={2188}
          priority
          className="w-full max-w-md object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Desktop: absolutely positioned image */}
      <div className="hidden lg:block absolute bottom-0 right-0 lg:right-24 xl:right-48 ">
        <Image
          src="/hero.png"
          alt="StepUP app showing step tracking, health metrics, and walk trends"
          width={2354}
          height={2188}
          priority
          className="relative max-h-[93.5vh] w-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
}
