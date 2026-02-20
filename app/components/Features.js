import {
  IconDeviceWatchFilled,
  IconFlameFilled,
  IconHeartFilled,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconFlameFilled,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    title: "Daily Steps",
    description: "See your step count, distance, and active time at a glance.",
  },
  {
    icon: IconHeartFilled,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Streaks",
    description: "Keep your daily streak alive and celebrate consistency.",
  },
  {
    icon: IconDeviceWatchFilled,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Track Walk Workouts",
    description:
      "Log each walk with distance, duration, pace, and progress over time.",
  },
];

export default function Features() {
  return (
    <section className="lg:hidden">
      <div className="divide-y divide-zinc-200/80 border-t border-zinc-200/80">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4 px-6 py-5">
            <div
              className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${feature.iconBg}`}
            >
              <feature.icon
                size={22}
                stroke={1.5}
                className={feature.iconColor}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
