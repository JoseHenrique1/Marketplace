import { SignupForm } from "@/components/organisms/signup-form";

export function Signup() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2">
        <SignupForm />
      </div>
    </div>
  )
}
