import { type User } from '@/types/user-type'
import { create } from 'zustand'

type AuthState = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User) => void
  setToken: (token: string) => void
  setLoading: (loading: boolean) => void
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) =>
    set({ user, isAuthenticated: true }),

  setToken: (token) =>
    set({ token, isAuthenticated: true }),

  setLoading: (loading) =>
    set({ isLoading: loading }),

  login: (user, token) =>
    set({ user, token, isAuthenticated: true, isLoading: false }),

  logout: () =>
    set({ user: null, token: null, isAuthenticated: false, isLoading: false }),
}))