export const metadata = {
  title: "Privacy Policy",
  description:
    "How StepUP handles your data. Short answer: it stays on your device.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative flex-1 grid grid-cols-9 px-6 md:px-12 lg:px-20 py-12 md:py-28">
      {/* Vertical lines - full height */}
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Last updated: February 19, 2026
        </p>

        <p className="mt-8 text-base leading-relaxed text-zinc-600">
          StepUP ("we," "us," or "our") respects your privacy. This Privacy
          Policy explains how StepUP handles information when you use our mobile
          application.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">Summary</h2>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-600 list-disc pl-5">
          <li>We do not create user accounts.</li>
          <li>We do not collect or store data on our servers.</li>
          <li>
            We do not use third-party analytics, advertising, or crash reporting
            SDKs.
          </li>
          <li>
            Health data is accessed only through Apple HealthKit on your device.
          </li>
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Information We Access
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          HealthKit data: StepUP reads and may write health and fitness data
          (such as steps, distance, and related activity metrics) through Apple
          HealthKit. This data stays on your device.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          How We Use Information
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          We use HealthKit data only to:
        </p>
        <ul className="mt-3 space-y-2 text-base leading-relaxed text-zinc-600 list-disc pl-5">
          <li>Display your activity metrics and progress.</li>
          <li>Calculate summaries and trends inside the app.</li>
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Data Storage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          All data is stored locally on your device. We do not transmit your
          data to our servers.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Data Sharing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          We do not sell, rent, or share your personal data with third parties.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Third-Party Services
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          StepUP does not integrate third-party analytics, ads, or crash
          reporting services.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Your Choices
        </h2>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-600 list-disc pl-5">
          <li>
            You can manage or revoke HealthKit access at any time in iOS
            Settings.
          </li>
          <li>You can delete the app to remove locally stored data.</li>
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          International Users
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          StepUP is available globally. Because data stays on your device, we do
          not transfer your data internationally.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Children&apos;s Privacy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          StepUP is not directed to children under 13, and we do not knowingly
          collect personal data from children.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">
          Changes to This Policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          We may update this Privacy Policy from time to time. If we make
          changes, we will update the &quot;Last updated&quot; date above.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-zinc-900">Contact</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          If you have questions or privacy requests, contact us at:
        </p>
        <p className="mt-2 text-base leading-relaxed text-zinc-600">
          myemail@gmail.com
        </p>
      </article>
    </main>
  );
}
