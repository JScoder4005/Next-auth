import { User } from "@clerk/nextjs/server";

interface RecentActivityProps {
  user: User | null;
}

interface ActivityItem {
  icon: string;
  title: string;
  time: string;
  bgColor: string;
}

export function RecentActivity({ user }: RecentActivityProps) {
  const activities: ActivityItem[] = [
    {
      icon: "✅",
      title: "Successfully signed in",
      time: "Just now",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: "👤",
      title: "Account created",
      time: user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString()
        : "Unknown date",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div
              className={`${activity.bgColor} p-1 rounded-full w-8 h-8 flex items-center justify-center`}
            >
              {activity.icon}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
