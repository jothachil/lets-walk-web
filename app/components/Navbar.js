import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 border-b border-zinc-200/80 animate-fade-in-up">
      <a href="/" className="flex items-center gap-2.5">
        <Image
          src="/App Icon.svg"
          alt="Let's Walk"
          width={36}
          height={36}
          className="rounded-lg"
        />
        <span className="font-display text-lg font-semibold tracking-tight text-zinc-900">
          Let&apos;s Walk
        </span>
      </a>
      <div className="flex items-center gap-6">
        <a href="/manifesto" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Manifesto</a>
        <a href="/privacy-policy" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</a>
        <a href="/terms-and-conditions" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Terms & Conditions</a>
      </div>
    </nav>
  );
}
