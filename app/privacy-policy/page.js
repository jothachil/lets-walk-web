export const metadata = {
  title: "Privacy Policy — Let's Walk",
  description:
    "How Let's Walk handles your data. Short answer: it stays on your device.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Last updated: February 2026
          </p>

          <p className="mt-8 text-base leading-relaxed text-zinc-600">
            Let&apos;s Walk is designed with privacy as a foundation, not an
            afterthought. This policy explains exactly what data we access, how
            it&apos;s used, and where it lives.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Data we access
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Let&apos;s Walk reads data from Apple HealthKit, including step
            count, walking distance, and related health metrics. This data is
            used solely to display your activity within the app.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Where your data lives
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            All your data stays on your device. We do not transmit, upload, or
            sync your health data to any server, cloud service, or third-party
            platform. There is no backend. There is no database. Your data never
            leaves your iPhone.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            No servers, no accounts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Let&apos;s Walk does not require you to create an account, sign in,
            or provide any personal information. We operate no servers and
            collect no data whatsoever.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            No tracking or analytics
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            We do not use any analytics services, advertising SDKs, or tracking
            tools. We do not collect usage data, crash reports tied to your
            identity, or any behavioural information.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Data deletion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Since all data is stored locally on your device, deleting the app
            removes all associated data. There is nothing for us to delete on
            our end because we never had it.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Changes to this policy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            If we ever update this policy, we&apos;ll reflect the changes on
            this page with an updated date. Given our architecture, meaningful
            changes are unlikely — there&apos;s nothing to collect.
          </p>

          <p className="mt-16 text-sm text-zinc-400">
            Questions? Reach out at hello@letswalk.app
          </p>
        </article>
      </main>
  );
}
