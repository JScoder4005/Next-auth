import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { WelcomeHeader } from "@/features/dashboard/components/welcome-header";
import { ProfileCard } from "@/features/dashboard/components/profile-card";
import { QuickActions } from "@/features/dashboard/components/quick-actions";
import { RecentActivity } from "@/features/dashboard/components/recent-activity";
import { StatsCards } from "@/features/dashboard/components/tats-card";

export default async function Dashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  // This shouldn't happen due to middleware, but good to have as backup
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <WelcomeHeader user={user} />

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <ProfileCard user={user} userId={userId} />
        <QuickActions />
      </div>

      <StatsCards user={user} />
      <RecentActivity user={user} />
    </div>
  );
}
