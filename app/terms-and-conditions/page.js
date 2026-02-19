export const metadata = {
  title: "Terms & Conditions — Let's Walk",
  description: "Terms and conditions for using Let's Walk.",
};

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Last updated: February 2026
          </p>

          <p className="mt-8 text-base leading-relaxed text-zinc-600">
            By downloading or using Let&apos;s Walk, you agree to the following
            terms. They&apos;re short and straightforward — just like the app.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Use of the app
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Let&apos;s Walk is a personal walking tracker. You may use it for
            personal, non-commercial purposes. You agree not to
            reverse-engineer, modify, or distribute the app or any part of it.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Health data
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            The app reads data from Apple HealthKit to display your walking
            activity. This data is processed entirely on your device and is
            never sent to any external server. Let&apos;s Walk is not a medical
            device and should not be used as a substitute for professional
            medical advice.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            No warranty
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Let&apos;s Walk is provided &ldquo;as is&rdquo; without warranties
            of any kind, whether express or implied. We do not guarantee that
            the app will be error-free, uninterrupted, or that the data
            displayed will be perfectly accurate.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Limitation of liability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            To the fullest extent permitted by law, Let&apos;s Walk and its
            creator shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the app.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Intellectual property
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            All content, design, and code in Let&apos;s Walk are the
            intellectual property of its creator. You may not copy, reproduce,
            or redistribute any part of the app without prior written
            permission.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">
            Changes to these terms
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            We may update these terms from time to time. Any changes will be
            reflected on this page with an updated date. Continued use of the
            app after changes constitutes acceptance of the revised terms.
          </p>

          <p className="mt-16 text-sm text-zinc-400">
            Questions? Reach out at hello@letswalk.app
          </p>
        </article>
      </main>
  );
}
