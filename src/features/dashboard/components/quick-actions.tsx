interface Action {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const actions: Action[] = [
  {
    icon: "📝",
    title: "Update Profile",
    description: "Manage your account settings",
  },
  {
    icon: "🔐",
    title: "Security Settings",
    description: "Configure two-factor authentication",
  },
  {
    icon: "📊",
    title: "View Analytics",
    description: "Check your activity dashboard",
  },
];

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={action.onClick}
          >
            <div className="font-medium text-gray-900 dark:text-white">
              {action.icon} {action.title}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {action.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
