import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200/80 pb-20 lg:pb-0">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 lg:px-20 gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-b from-[#FF5A1A] to-[#E02800] border border-[#FF7032] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_#CC1C02]">
            <Image src="/logo.svg" alt="StepUP" width={20} height={20} />
          </span>
          <span className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} StepUP
          </span>
        </div>
        <span className="text-sm text-zinc-400">
          Made by{" "}
          <a
            href="https://johnthachil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            John Thachil
          </a>
        </span>
      </div>
    </footer>
  );
}
