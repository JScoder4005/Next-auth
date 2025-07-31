interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🔐",
    title: "Secure Authentication",
    description:
      "Industry-standard security with Clerk's authentication system",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Built with Next.js 15 and the latest App Router for optimal performance",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    description: "Clean, responsive interface with Tailwind CSS styling",
  },
];

export function FeaturesSection() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
