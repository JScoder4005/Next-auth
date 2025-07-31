import { User } from "@clerk/nextjs/server";

interface WelcomeHeaderProps {
  user: User | null;
}

export function WelcomeHeader({ user }: WelcomeHeaderProps) {
  const displayName =
    user?.firstName || user?.emailAddresses[0]?.emailAddress || "there";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Welcome to your Dashboard! 🎉
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Hello {displayName}! You've successfully authenticated with Clerk.
      </p>
    </div>
  );
}
