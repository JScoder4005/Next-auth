import { AuthPageWrapper } from "@/features/auth/uth-page-wrapper";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <AuthPageWrapper
      title="Create your account"
      subtitle="Join us today! Sign up to get started"
    >
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
          },
        }}
        fallbackRedirectUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </AuthPageWrapper>
  );
}
