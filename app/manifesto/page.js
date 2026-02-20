import {
  IconCloudOff,
  IconEyeOff,
  IconShieldCheck,
  IconTrash,
} from "@tabler/icons-react";

export const metadata = {
  title: "Manifesto",
  description: "Your data stays on your device. Always.",
};

const sections = [
  {
    icon: IconCloudOff,
    title: "No cloud. No servers. No exceptions.",
    body: "Every step you take, every walk you log, every health metric you track — it all lives on your device. We never send your data to the cloud. We don\u2019t have servers waiting to collect it. There is no account to create, no login to remember.",
  },
  {
    icon: IconEyeOff,
    title: "No analytics on you",
    body: "We don\u2019t track how you use the app. We don\u2019t collect usage patterns, crash reports tied to your identity, or behavioural data. We have zero interest in profiling you.",
  },
  {
    icon: IconShieldCheck,
    title: "Built for trust",
    body: "Most apps ask for your trust and then quietly erode it. We\u2019d rather earn it by design. The architecture of StepUP makes privacy the default — not a toggle buried in settings.",
  },
  {
    icon: IconTrash,
    title: "Your data disappears when you do",
    body: "Delete the app and everything goes with it. No residual data sitting on a server somewhere. No email asking you to come back. It\u2019s gone.",
  },
];

export default function Manifesto() {
  return (
    <main className="relative flex-1 grid grid-cols-9 px-6 md:px-12 lg:px-20 py-12 md:py-28">
      <div className="absolute inset-0 hidden md:flex pointer-events-none px-6 md:px-12 lg:px-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r border-dashed border-zinc-200/60 last:border-r-0 min-h-full"
          />
        ))}
      </div>
      <article className="col-span-9 md:col-start-3 md:col-span-5 md:col-end-8 relative z-10">
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
          Our Manifesto
        </h1>

        <p className="mt-2 text-base leading-relaxed text-zinc-600">
          We built StepUP with a simple belief: your health data is yours and
          yours alone.
        </p>

        {sections.map((section, i) => (
          <div key={section.title} className={i === 0 ? "mt-20" : "mt-10"}>
            <section.icon size={32} stroke={2} className="text-brand-500" />
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">
              {section.title}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-600">
              {section.body}
            </p>
          </div>
        ))}

        <p className="mt-16 text-sm text-zinc-400">
          This isn&apos;t a marketing page. It&apos;s a promise baked into every
          line of code.
        </p>
      </article>
    </main>
  );
}
