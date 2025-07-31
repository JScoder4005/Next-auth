import { User } from "@clerk/nextjs/server";

interface StatsCardsProps {
  user: User | null;
}

interface StatCard {
  icon: string;
  label: string;
  value: string;
  bgColor: string;
}

export function StatsCards({ user }: StatsCardsProps) {
  const stats: StatCard[] = [
    {
      icon: "👤",
      label: "Profile Status",
      value: "Active",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: "✅",
      label: "Email Verified",
      value:
        user?.emailAddresses[0]?.verification?.status === "verified"
          ? "Yes"
          : "No",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: "🔗",
      label: "Sessions",
      value: "1 Active",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: "🚀",
      label: "Plan",
      value: "Free",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
        >
          <div className="flex items-center">
            <div className={`${stat.bgColor} p-2 rounded-lg`}>{stat.icon}</div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
