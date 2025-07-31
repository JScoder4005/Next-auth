import { User } from "@clerk/nextjs/server";

interface ProfileCardProps {
  user: User | null;
  userId: string;
}

export function ProfileCard({ user, userId }: ProfileCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Profile Information
      </h2>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Full Name
          </label>
          <p className="text-gray-900 dark:text-white">
            {user?.fullName || "Not provided"}
          </p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Email
          </label>
          <p className="text-gray-900 dark:text-white">
            {user?.emailAddresses[0]?.emailAddress || "Not provided"}
          </p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            User ID
          </label>
          <p className="text-gray-900 dark:text-white font-mono text-sm">
            {userId}
          </p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Account Created
          </label>
          <p className="text-gray-900 dark:text-white">
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
