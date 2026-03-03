import { create } from "zustand"

interface User {
  id: string
  email: string
  role: "ROOT" | "ADMIN" | "DOCTOR"
}

interface AuthState {
  user: User | null
  accessToken: string | null
  setAuth: (user: User, accessToken: string, refreshToken: string) => void
  logout: () => void
  loadFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  setAuth: (user, accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("user", JSON.stringify(user))
    set({ user, accessToken })
  },

  logout: () => {
    localStorage.clear()
    set({ user: null, accessToken: null })
  },

  loadFromStorage: () => {
    const token = localStorage.getItem("accessToken")
    const user = localStorage.getItem("user")
    if (token && user) {
      set({ accessToken: token, user: JSON.parse(user) })
    }
  },
}))