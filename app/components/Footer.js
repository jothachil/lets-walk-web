import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200/80">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 lg:px-20 gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/App Icon.svg"
            alt="Let's Walk"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Let&apos;s Walk
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/manifesto" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors">Manifesto</a>
          <a href="/privacy-policy" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors">Privacy Policy</a>
          <a href="/terms-and-conditions" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
