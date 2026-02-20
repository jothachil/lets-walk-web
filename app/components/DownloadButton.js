import clsx from "clsx";
import Image from "next/image";

export default function DownloadButton({ className }) {
  return (
    <a
      href="#download"
      className={clsx(
        "group relative flex h-13 items-center gap-3 rounded-xl px-6 font-medium text-white transition-all duration-300 bg-linear-to-bm-[#FF5A1A] to-[#E02800] border border-[#FF7032] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_#CC1C02] hover:from-[#FF6A2E] hover:to-[#E53500] hover:shadow-[0_4px_8px_rgba(255,46,0,0.2),0_0_0_1px_#CC1C02]",
        className,
      )}
    >
      <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} />
      Download for iOS
    </a>
  );
}
