import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Next-Auth
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
