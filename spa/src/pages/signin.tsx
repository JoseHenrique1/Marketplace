import { LoginForm } from "@/components/organisms/login-form";

export function Signin() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2">
        <LoginForm />
      </div>
    </div>
  )
}
