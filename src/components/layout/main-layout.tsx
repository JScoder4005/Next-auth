import { ReactNode } from "react";
import { Navbar } from "./navabar";
interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
