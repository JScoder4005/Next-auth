import { AuthPageWrapper } from "@/features/auth/uth-page-wrapper";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <AuthPageWrapper
      title="Sign in to your account"
      subtitle="Welcome back! Please sign in to continue"
    >
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
          },
        }}
        fallbackRedirectUrl="/dashboard"
        signUpUrl="/sign-up"
      />
    </AuthPageWrapper>
  );
}
