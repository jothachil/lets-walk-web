import {
  IconCloudOff,
  IconEyeOff,
  IconShieldCheck,
  IconTrash,
} from "@tabler/icons-react";
export const metadata = {
  title: "Manifesto — Let's Walk",
  description: "Your data stays on your device. Always.",
};

export default function Manifesto() {
  return (
      <main className="relative flex-1 grid grid-cols-9 px-6 md:px-12 lg:px-20 py-12 md:py-28">
        {/* Vertical lines - full height */}
        <div className="absolute inset-0 hidden md:flex pointer-events-none px-6 md:px-12 lg:px-20">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-dashed border-zinc-200/40 last:border-r-0 min-h-full"
            />
          ))}
        </div>
        <article className="col-span-9 md:col-start-3 md:col-span-5 md:col-end-8 relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Our Manifesto
          </h1>

          <p className="mt-8 text-base leading-relaxed text-zinc-600">
            We built Let&apos;s Walk with a simple belief: your health data is
            yours and yours alone.
          </p>

          <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold text-zinc-900">
            <IconCloudOff
              size={20}
              stroke={1.5}
              className="text-brand-500 shrink-0"
            />
            No cloud. No servers. No exceptions.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Every step you take, every walk you log, every health metric you
            track — it all lives on your device. We never send your data to the
            cloud. We don&apos;t have servers waiting to collect it. There is no
            account to create, no login to remember.
          </p>

          <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold text-zinc-900">
            <IconEyeOff
              size={20}
              stroke={1.5}
              className="text-brand-500 shrink-0"
            />
            No analytics on you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            We don&apos;t track how you use the app. We don&apos;t collect usage
            patterns, crash reports tied to your identity, or behavioural data.
            We have zero interest in profiling you.
          </p>

          <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold text-zinc-900">
            <IconShieldCheck
              size={20}
              stroke={1.5}
              className="text-brand-500 shrink-0"
            />
            Built for trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Most apps ask for your trust and then quietly erode it. We&apos;d
            rather earn it by design. The architecture of Let&apos;s Walk makes
            privacy the default — not a toggle buried in settings.
          </p>

          <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold text-zinc-900">
            <IconTrash
              size={20}
              stroke={1.5}
              className="text-brand-500 shrink-0"
            />
            Your data disappears when you do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Delete the app and everything goes with it. No residual data sitting
            on a server somewhere. No email asking you to come back. It&apos;s
            gone.
          </p>

          <p className="mt-16 text-sm text-zinc-400">
            This isn&apos;t a marketing page. It&apos;s a promise baked into
            every line of code.
          </p>
        </article>
      </main>
  );
}
