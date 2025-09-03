import { getProfile } from '@/services/user-service';
import { useAuthStore } from '@/stores/auth-store';
import { useEffect, type ReactNode } from 'react'

interface props {
  children: ReactNode
}

export default function AuthenticationManagerWrapper({children}: props) {
  const { login, logout, setLoading } = useAuthStore();

  const refreshUser = async () => {
    const profile = await getProfile();
    const token = localStorage.getItem('token');
    if (profile && token) {
      login({ ...profile  }, token); 
    }
    else {
      logout();
    }
  }

  useEffect(()=>{
    setLoading(true);
    refreshUser()
  },[]) 

  return (<> {children} </>)
}