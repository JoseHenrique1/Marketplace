import { useAuthStore } from "@/stores/auth-store"

export function Profile() {
  const {user} = useAuthStore();
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      
    </div>
  )
}
