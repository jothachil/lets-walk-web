import Image from "next/image";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 bg-white border-t border-zinc-200/80">
      <a
        href="#download"
        className="flex h-13 w-full items-center justify-center gap-3 rounded-xl font-medium text-white transition-all duration-300 bg-gradient-to-b from-[#FF5A1A] to-[#E02800] border border-[#FF7032] shadow-[0_4px_12px_rgba(255,46,0,0.25),0_0_0_1px_#CC1C02] active:scale-[0.98]"
      >
        <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} />
        Download for iOS
      </a>
    </div>
  );
}
