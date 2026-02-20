import DownloadButton from "./DownloadButton";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 bg-white border-t border-zinc-200/80">
      <DownloadButton className="w-full justify-center active:scale-[0.98]" />
    </div>
  );
}
