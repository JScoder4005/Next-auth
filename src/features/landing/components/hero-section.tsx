import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <Image
          className="mx-auto mb-6 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Next-Auth
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A modern authentication system built with Next.js 15 and Clerk. Sign
          up to access your personalized dashboard.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
