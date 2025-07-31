import { ReactNode } from "react";

interface AuthPageWrapperProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthPageWrapper({
  children,
  title,
  subtitle,
}: AuthPageWrapperProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}
