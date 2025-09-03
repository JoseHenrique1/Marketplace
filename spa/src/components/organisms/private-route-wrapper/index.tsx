import { useAuthStore } from "@/stores/auth-store";
import { Navigate, Outlet } from "react-router";

interface props {
  expectedAuthenticateStatus?: boolean //true se é esperado que o user esteja autenticado, false para o contrario
}
export function PrivateRouteWrapper({expectedAuthenticateStatus = true}: props) {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated !== expectedAuthenticateStatus) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
